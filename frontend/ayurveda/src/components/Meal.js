import React, { useEffect, useState } from "react";
import UserDosha from "./UserDosha";
import { Link } from "react-router-dom";

const Meal = () => {
  const [week, setWeek] = useState([]);
  const [userData, setUserData] = useState({});
  const [mealPlan, setMealPlan] = useState(true);
  const authToken = localStorage.getItem('authToken');

  const loadData = async () => {
    let response = await fetch(global.url + "api/mealplan", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      'Authorization': `Bearer ${authToken}` }
    });
    response = await response.json();
    setWeek(response[0]);
    setUserData(response[1]);
  }; 

  const mealButton = () => {
    setMealPlan(!mealPlan)
  }

  useEffect(() => {
    loadData();
  },[]);


  return (
    <div>
      {mealPlan ? 
      <div className="mealPlan container flexUtil">
          <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="info-item">
          <label>Name:</label>
          <span>{userData.name}</span>
        </div>
        <div className="info-item">
          <label>Weight:</label>
          <span>{userData.weight} kg</span>
        </div>
        <div className="info-item">
          <label>Age:</label>
          <span>{userData.age} years</span>
        </div>
        <div className="info-item">
          <label>Gender:</label>
          <span>{userData.gender}</span>
        </div>
      </div>
    </div>
          <div className="container" style={{"gap": "1rem"}}>
          <button onClick={mealButton}>Show Meal Plan</button>
          <Link to='/doctor'><button onClick={mealButton}>Find Doctors</button></Link>
          </div>
          <UserDosha/>
      </div>
    : 
    <div className="mealPlan container flexUtil">
      <button onClick={mealButton}>Hide Meal Plan</button>
      <h1 style={{"textAlign": "center"}}>Your Meal Plan</h1>
    <div className="meal-plan-table">
      {week.map((days, index) => (
        <div key={index} className="meal-plan-day">
          <h2>{days.day}</h2>
          <table>
            <thead>
              <tr>
                <th>Meal</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {days.meals.map((meal, mealIndex) => (
                <tr key={mealIndex}>
                  <td>{meal.name}</td>
                  <td>{meal.items.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </div>
    }
    </div>
  );
};

export default Meal;

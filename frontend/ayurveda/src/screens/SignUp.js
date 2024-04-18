import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SignUp() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    weight: '',
    age: '',
    gender: 'male'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(global.url + 'api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        weight: credentials.weight,
        age: credentials.age,
        gender: credentials.gender
      })
    });

    try {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response data:', data);
      if (data.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to Sign-Up. Please try again.');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />
      <div className='container background'>
        <form className='login container flexUtil' onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className='label'>
            <label htmlFor='name'>Name</label>
          </div>
          <input type='text' placeholder='Enter your name' name='name' id='name' value={credentials.name} onChange={onChange} />
          <div className='label'>
            <label htmlFor='email'>Email</label>
          </div>
          <input type='email' placeholder='Enter your email' name='email' id='email' value={credentials.email} onChange={onChange} />
          <div className='label'>
            <label htmlFor='password'>Password</label>
          </div>
          <input type='password' placeholder='Enter your password' name='password' id='password' value={credentials.password} onChange={onChange} />
          <div className='label'>
            <label htmlFor='weight'>Weight</label>
          </div>
          <input type='number' placeholder='Enter your weight' name='weight' id='weight' value={credentials.weight} onChange={onChange} />
          <div className='label'>
            <label htmlFor='age'>Age</label>
          </div>
          <input type='number' placeholder='Enter your age' name='age' id='age' value={credentials.age} onChange={onChange} />
          <div className='label'>
            <label htmlFor='gender'>Gender</label>
          </div>
          <select className="select-container" name='gender' id='gender' value={credentials.gender} onChange={onChange}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </>
  );
}

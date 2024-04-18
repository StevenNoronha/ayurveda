import React from 'react'
import Questions from '../components/Questions';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function QuestionsPage() {
  return (
    <div>
        <Navbar/>
        {(localStorage.getItem("authToken")) ? 
        <Questions/>
        : 
        <div className="background container">
            <div className='questions container'>
                <h1 style={{"textAlign": "center"}}>You have not signed in, please sign in to continue</h1>
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
        }
    </div>
  )
}

export default QuestionsPage
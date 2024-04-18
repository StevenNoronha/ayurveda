import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respone = await fetch(global.url+"api/loginuser", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await respone.json()
    console.log(json)

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/predict");
    }
    
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <div>
        <Navbar/>
        <div className='container background'>
              <form className='login container flexUtil' onSubmit={handleSubmit}>
              <h1>Login</h1>
                <div className='label'><label htmlFor='email'>Email</label></div>
                <input type="email" placeholder='Enter your email' name='email' id='email' value={credentials.email} onChange={onChange}/>
                <div className='label'><label htmlFor='password'>Password</label></div>
                <input type="password" placeholder='Enter your password' name='password' id='password' value={credentials.password} onChange={onChange}/>
                <div>
                <button className='btn'>Submit</button>
                <Link to="/signup"><button>New user</button></Link>
                </div>
              </form>
        </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import logo from '../assests/logo.png'
import ham from '../assests/ham.png'
import { Link, useNavigate} from 'react-router-dom'

function Navbar({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = ()=> {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <div>
        <nav className='navbar container'>
            <ul className='container navContainer'>
                <li>
                    <Link to="/">
                    <div className='container'>
                    <img src={logo} alt='logo' width={55}/>
                    <h1>AyurPredict</h1>
                    </div>
                    </Link>
                </li>
                <div className='toggle' onClick={toggleNavbar}>
                    <img src={ham} alt='ham-icon' width={35}></img>
                </div>
                    <div className={`container tog-on ${isOpen ? '' : 'tog-off'}`}>
                    {(currentPage !== "home") 
                    ? 
                        <Link to="/"><button>Home</button></Link>
                    : 
                        null
                    }
                    {(!localStorage.getItem("authToken")) 
                    ? 
                        null
                    : 
                        <Link to="/profile"><button>Profile</button></Link>
                    }
                    {(!localStorage.getItem("authToken")) 
                    ? 
                        <Link to="/login"><button>Login</button></Link>
                    : 
                        <button onClick={handleClick}>Logout</button>
                    }
                </div>
            </ul>
        </nav>
    </div>
  )
}


export default Navbar;

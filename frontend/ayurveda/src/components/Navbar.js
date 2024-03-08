import React, { useState } from 'react';
import logo from '../assests/logo.png'
import ham from '../assests/ham.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <h1>Ayurveda</h1>
                    </div>
                    </Link>
                </li>
                <div className='toggle' onClick={toggleNavbar}>
                    <img src={ham} alt='ham-icon' width={35}></img>
                </div>
                    <div className={`container tog-on ${isOpen ? '' : 'tog-off'}`}>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </ul>
        </nav>
    </div>
  )
}


export default Navbar
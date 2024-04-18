import React from 'react'
import gif from '.././assests/banner-slider.gif'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='container hero'>
      <div className='hero-text container example'>
        <h1 className='example'>Ayuverda Dosha Assessment</h1>
        <hr/>
        <p>Respond to the following inquiries to ascertain any potential imbalances in your doshas, ascertaining a holistic understanding of your well-being</p>
        <Link to='/predict'><button>Take the Assessment</button></Link>
      </div>
      <img src={gif} alt='logo' width={375} id='logo'/>
    </div>
  )
}

export default Hero
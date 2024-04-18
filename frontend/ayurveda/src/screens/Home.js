import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar currentPage="home"/>
        <Hero/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default Home
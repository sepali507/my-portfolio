import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>    
        <h1><span>I'M Buddhika Sepali Rathnayaka,</span>Aspiring Software Developer based on Sri Lanka.</h1>
        <p>Hi, I’m an Aspirig Software Developer passionate about coding and learning new technologies. This is my portfolio where I share my projects and skills. I’m looking for opportunities to grow and work on real-world software development.</p>
        <div className="hero-action">   
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href="/Sepali_Intern_Software_Engineer.pdf" download className="hero-resume">Download My Resume</a>
     </div>
     </div>
  )
}

export default Hero
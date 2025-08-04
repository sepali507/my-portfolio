import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
    </div>
    <div className="about-sections">
    <div className="about-left">
       <div className="about-para">
        <p>I am a passionate and detail-oriented software developer with a strong foundation in full-stack web development. I specialize in building modern, responsive, and user-friendly web applications using technologies such as React, Node.js, Express, and MySQL. I enjoy solving complex problems, continuously learning new tools and frameworks, and delivering clean, efficient code. My goal is to contribute to innovative projects that create real-world impact and enhance user experiences.</p>
       
    </div>
    <div className="about-skills">
      <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
      <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
      <div className="about-skill"><p>PHP</p><hr style={{width:"80%"}}/></div>
      <div className="about-skill"><p>React.Js</p><hr style={{width:"60%"}}/></div>
      <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>Node.Js</p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>My SQL</p><hr style={{width:"60%"}}/></div>
      <div className="about-skill"><p>Java</p><hr style={{width:"65%"}}/></div>
      <div className="about-skill"><p>C#</p><hr style={{width:"60%"}}/></div>
    </div>
  </div>
  </div>
 </div>
 )
}

export default About
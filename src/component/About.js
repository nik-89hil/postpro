import React from 'react'
import {Link} from 'react-router-dom'
import "./log.css"



const About = () => {

  


  return (
    <>
    <div className='about-page'>
    <button id='goback'><Link to={"/posts"}> <i className="fa-solid fa-arrow-left"></i> </Link></button>
    <h1>About us</h1>
    <br />
    <p>
        Hello everone , This post is created for those who are fresher and make their website.
        using effective and simple method to comprehend easily. <br />
        website contains different type of tools and technology post..
        <br />
        Be learner , Be creater 
    </p>
    <br />
    <button className="business">get your website dm</button>
    <br />
    <h2>Post based on : </h2>
    <p className='corosal'>
    {
        arr.map((ele,id)=>{
            return <button key={id} className='topic'>{ele}</button>
        })
    }
    
    </p>
    <h2>get connected with us..</h2>
    <div className='social-media'>
     <a href="https://www.instagram.com/nikfolio_20/" target='_blank'><i className="fa-brands fa-instagram fa-beat"></i></a>
     <a href="https://www.linkedin.com/in/nik-192002hil/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
     <a href="mailto:object816@gmail.com" target='_blank'><i className="fa-regular fa-envelope"></i></a>
    </div>
    </div>
    </>
  )
}

export default About

import React from 'react'
import './pagenf.css'
import {Link} from 'react-router-dom'

const Fotter = () => {
  return (
    <>
    <div className="fotter">
        <div className="left-foot">
            <p>
            <i className="fa-regular fa-copyright"></i>
            all rights are reserved || 2023 &nbsp;
            <Link to={"/posts"}>widepost.com</Link>
            </p>
        </div>
        <div className="right-foot">
            <span>connect on : </span>
            <a href="http://www.instagram.com/nikfolio_20/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="http://www.linkedin.com/in/nik-192002hil/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
      
    </>
  )
}

export default Fotter

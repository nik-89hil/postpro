import React from 'react';
import pagenotfound from "../component/notfound.jpg"
import "./pagenf.css"
import {Link} from "react-router-dom"

const Pagenf = () => {
  return (
    <>
    <div className="pagenotfound">
        <img src={pagenotfound} alt="page not found" draggable="false" />
        <Link to={"/posts"}> go back </Link>
    </div>
      
    </>
  )
}

export default Pagenf

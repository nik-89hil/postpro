import React, {  } from 'react'
import './header.css'
import {Link, NavLink, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import logo from "./logoph.jpg";


const Header = () => {
  const [box,setBox] = React.useState(false);
  const {user} = useSelector(state=>state.user);
 


  return (
    <>
    <div className="header">
      <div id='webname'>
        <Link to={"/posts"}><img  src={logo} draggable="false"/><span style={{color:"white"}}>widepost.com</span></Link>
      </div>
      <div id='tagdiv'>
          <p><NavLink to={"/posts"}><i className="fa-solid fa-paperclip"></i> Posts</NavLink></p>
          <p>
            <NavLink to={"/search"}>
            <span id='search-icon'><i className="fa-solid fa-magnifying-glass"></i></span>
           </NavLink>
          </p>
          <p>
          <i className="fa-regular fa-user"></i>&nbsp;
          {
            user.length ===0 ? <Link to={"/user/login"}>create account</Link> : user[0].email ==="unauthorised"?(<Link to={"/user/login"}>create account</Link>):(user[0].email)
          }
          
          </p>
          <p onClick={()=>setBox(!box)} className='button-user'>&nbsp;<i className="fa-solid fa-ellipsis" style={{color:"white"}}></i></p>
          
      </div>
    </div>
    {
      box?(
        <div className='user-features'>
     
      {
        user.length > 0 && user[0].isAdmin?(
          <div>
          {/* create post and your post */}
          <p title='Create post'><Link to={"/uploadImage"}><i className="fa-regular fa-square-plus"></i> create post</Link></p>
          <p title='your post'><Link to={"/yourPost"}><i className="fa-regular fa-clipboard"></i> your post</Link></p>
        
          
          </div>

        ):(
          null
        )
      }
      

      {
        user.length >0 && user[0].islogin?<p title='logout'><Link to={`/user/logout/${user[0]._id}`}><i className="fa-solid fa-arrow-right-from-bracket"></i> logout</Link></p>:null
      }

      <p><NavLink to={"/about"} style={{color:"white"}}><i className="fa-solid fa-circle-info"></i> About</NavLink></p>
    </div>
      ):null
    }

    
      
    </>
  )
}

export default Header

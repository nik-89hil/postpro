import React, {  } from 'react'
import './header.css'
import {Link, NavLink, } from "react-router-dom"
import { useSelector } from 'react-redux'
import logo from "./logoph.jpg";
import {motion} from 'framer-motion'


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
          
          <p onClick={()=>setBox(!box)} className='button-user'>&nbsp;<i className="fa-solid fa-list-ul" style={{color:"white"}}></i></p>
          
      </div>
    </div>
    {
      box?(
        <motion.div className='user-features'
        initial={{y:-200}}
        animate={{x:0,y:10}}
        transition={{ delay:0.1 ,duration:.4,ease:'easeInOut', type:"tween"}}
        exit={{y:-200}}
        >
     
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
      <p>
        
          {
            user.length ===0 ? <Link to={"/user/login"}><i className="fa-regular fa-user" style={{color:"white"}}></i> create account</Link> : user[0].email ==="unauthorised"?(<Link to={"/user/login"}>create account</Link>):( <span id='username' style={{color:"white"}}>{user[0].email}</span> )
          }
          
      </p>
      
      </motion.div>
      ):null
    }

    
      
    </>
  )
}

export default Header

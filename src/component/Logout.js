import React, { useEffect } from 'react'
import './loading.css'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const Logout = () => {
    const {user} = useSelector(state => state.user);
    const [load,setLoad] = React.useState(true)
    const navigate = useNavigate();

    const backer = () =>{
        navigate("https://widepost.onrender.com")
    }

    if(localStorage.getItem("user")==null){
        window.location.href ="https://widepost.onrender.com"
    }

    const outer = () =>{
        localStorage.removeItem("user");
        setLoad(false);
        window.location.href = "/posts"
        
    }

  return (
    <>
    { load?<Loading/>:null}
    <div className="delete-box">

        <h1>
            <span className='loghead'>{user[0].email}, <br/> Are you sure you want to logout</span> ? 

        </h1>

        <br />
        <br />
        <button onClick={outer}><i className="fa-solid fa-check"></i></button>
        <button onClick={backer}><i className="fa-solid fa-xmark"></i></button>
    </div>
      
    </>
  )
}

export default Logout

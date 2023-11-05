import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './loading.css'
import {useDispatch, useSelector} from 'react-redux'
import { deletebyId } from '../redux/search/action'
import Loading from "./Loading"


const Delete = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {deletesuccess,loading,err} = useSelector(state => state.deletesuccess)
    

    const deletepost = ()=>{
        const id = params.id;
        const title = params.topic;
        dispatch(deletebyId(id,title));

    }

    const backer = () =>{
        navigate("/posts")
    }

    if(deletesuccess.acknowledged){
        navigate("/posts")
    }



  return (
    <>
    <div className="delete-box">
        <h1>
            Are you sure you want to delete this post 
            : <br /> <span className='reddelete'>{params.topic}</span> ? <span style={{color:"red"}}>{err}</span>
        </h1>
        <br />
        {loading?<Loading/>:null}
        
        <br />
        <p>
             if you delete it. it is deleted permanently
            from our system...
        </p>
        <br />
        <button onClick={deletepost}><i className="fa-solid fa-check"></i></button>
        <button onClick={backer}><i className="fa-solid fa-xmark"></i></button>
    </div>
      
    </>
  )
}

export default Delete

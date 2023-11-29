import React, { useEffect } from 'react'
import Header from './Header.js'
import { useDispatch,useSelector} from "react-redux"
import './header.css'
import { Link } from 'react-router-dom'
import {PostList} from '../redux/post/action.js'
import Loading from './Loading.js'
import Fotter from './Fotter.js'
import {motion} from 'framer-motion';


const Post = () => {
    const dispatch = useDispatch();
    const {post,loading,err,root} = useSelector((state) => state.post)
    useEffect(()=>{
        dispatch(PostList())

    },[]);

    
  return (
    <>
    {loading?<Loading/>:null}
    <Header />
    
    <span style={{color:"white"}}>{err}</span>

    

    
    <div className='filter-container'>
       <p>
       Total : {post === undefined ? 0:post.length} posts <i className="fa-solid fa-filter"></i>
       </p>
       <br />
        {
            root === undefined?null:
            root.map((e,idx)=>{
                return(
                    <button><Link to={`/posts/${e}`} key={idx} >{e}</Link></button>
                )
            })
        }
        <br />
        <br />
    </div>
        
    

    {
            post && 
            post.map((value,idx)=>{
                console.log(value,"___")
                return(

                    <motion.div className="post" 
                    key={idx}
                    initial={{y:-200}}
                    animate={{x:0,y:10}}
                    transition={{ delay:0.3 ,duration:.4,ease:'easeInOut', type:"tween"}}
                    exit={{y:-200}}
                    >

                       <p className='heading'>
                        <Link to={`/posts/${value._id}/${value.title}`}  >
                        #{value.title}
                        </Link>
                        </p> 
                        <br />
                        <div className="imager">
                            <img src={`https://widepost-api.onrender.com/getimage/${value.imgarr[0]}`} alt="image not found"  />
                        </div>
                        <br />
                        <hr className='line'/>
                        <p className='postintro'> 
                        <i className="fa-solid fa-caret-right" style={{color:"black"}}></i> {value.intro}
                        <br />
                        <br />
                        <span className='authName'>{value.author} <br /> {value.createdAt}</span>
                        </p>
                    </motion.div>
                    
                    
                    
                )
            })
        }
    
    {loading?null:(
        <Fotter/>
    )}
    
    </>
  )
}

export default Post

import React, { useEffect } from 'react'
import Header from './Header.js'
import { useDispatch,useSelector} from "react-redux"
import './header.css'
import { Link,NavLink } from 'react-router-dom'
import {PostList} from '../redux/post/action.js'
import Loading from './Loading.js'
import Fotter from './Fotter.js'


const Post = () => {
    const dispatch = useDispatch();
    const {post,loading,err,root} = useSelector((state) => state.post)
    useEffect(()=>{
        dispatch(PostList())
    },[]);

    const array = ["mongodb","react","html","css","npm","mongodb","react","html","css","npm",]

    // console.log(post,loading,err,"====")


    
  return (
    <>
    <Header />
    {loading?<Loading/>:null}
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
                return(
                    <div className="post" key={idx}>
                        <p className='heading'>
                        <Link to={`/posts/${value._id}/${value.title}`}  >
                        {value.title}
                        </Link>
                        </p>
                        <br />
                        <hr className='line'/>
                        <p className='postintro'> 
                        {value.intro}
                        <br />
                        <br />
                        <span className='authName'>{value.author} || {value.createdAt}</span>
                        </p>
                    </div>
                    
                )
            })
        }

    <Fotter/>
    </>
  )
}

export default Post

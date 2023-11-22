import React, { useEffect } from 'react'
import Header from './Header'
import './loading.css'
import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../redux/post/action'
import {Link} from 'react-router-dom'

const Profile = () => {
    const {post} = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(PostList());

    },[]);

  return (
    <>
    <Header/>

    <div className="your-post-cont">
        <table>
           <tbody>
           <tr>
            <th>Blog Name</th>
            <th>Author Name</th>
            <th>Action</th>
           </tr>
           {
            post.map((ele ,idx)=>{
                return(
                    <tr key={idx}>
                        <td><i className="fa-regular fa-circle-dot"></i> {ele.title}</td>
                        <td>{ele.author}</td>
                        <td><Link to={`https://widepost.onrender.com//posts/delete/${ele._id}/${ele.title}`}>
                        <button className='delete-btn'><i className="fa-solid fa-trash"></i></button>
                        </Link>
                        </td>
                    </tr>
                )
            })
           }
           </tbody>
        </table>

    </div>
      
    </>
  )
}

export default Profile

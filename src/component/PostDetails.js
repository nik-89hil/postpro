import React, { useEffect } from 'react'
import './detailstyle.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Fotter from './Fotter'
import {detail} from '../redux/post/action'
import Slider from './Slider';


const PostDetails = () => {

  const {details} = useSelector(state => state.details);
  const dispatch = useDispatch();
  

  const params = useParams();
  
  const id = params.id;
  localStorage.setItem("getid",id);

 useEffect(()=>{
  dispatch(detail())
 },[params])




  return (
    <>

    {details === undefined ?(null):(
      <div className="post-detail">
      <button id="back"><Link to={"/posts"}><i className="fa-solid fa-arrow-left"></i></Link></button>
      <h1 className='head-topic'> {details.title} </h1>
      <p className='author-name'>{details.author} | posted on : {details.dateofpost}</p>
      <br />
      <p className='imgcont'>
        <Slider className="slides" images={details.imgarr}/>
      </p>
      <br/>
      <p className='introduction'> {details.intro}</p>
      <br/>
      <p className='summary'>{details.summary}</p>
      <br/>
      <p className='conclusion'> <span className='heading'>Conclusion </span> <br /> <br /> {details.conc}</p>
      <br/>
      <span className='heading'>Related topics</span><br />
      <br />
      { 
        details&&
        details.tags.map((ele,id)=>{
          return <button className='tags-but' key={id}><Link to={`/posts/${ele}`}>#{ele}</Link></button>
        })
      } 

    </div> 

    )}
    
    
    <Fotter/>
    
    </>
  )
}

export default PostDetails

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {searcher} from "../redux/search/action"
import Loading from "./Loading";
import { Link } from 'react-router-dom';
import "./loading.css"

const Filter = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {search,loading,err} = useSelector(state => state.search)

    useEffect(()=>{
        dispatch(searcher(params.relatedtopic))
    },[])



  return (
    <>
    {
        loading?<Loading/>:null
    }
    
    {
        <span style={{color:"black"}}>{err}</span>
    }
    <div className="filter">
        {
            <h2>Articles Related : {params.relatedtopic}</h2>
        }
    {
        search === undefined?(
            <span style={{color:"white"}}>Not found any result....</span>
        ):(
            search.data &&
            search.data.map((d,idx)=>{
                return(
                    <p key={idx} className='filter-link'><Link to={`/posts/${d._id}/${d.title}`}><i className="fa-solid fa-link"></i> {d.title}</Link></p> 
                )
            })
        )
    }
    </div>
    </>
  )
}

export default Filter

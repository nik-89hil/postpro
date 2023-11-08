import React, { useEffect } from 'react'
import Header from './Header'
import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm, } from 'react-hook-form'
import Loading from './Loading';
import {Link} from 'react-router-dom'
import {searcher} from '../redux/search/action'
import {motion} from 'framer-motion'

const Search = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch  = useDispatch();
    const [fors ,setFors] = React.useState(""); 
    const result = useSelector(state => state.search);



    const search = (data) =>{
        setFors(data.text)
        // console.log(fors,"search")
        
    }


    useEffect(()=>{
        // dispatch(account_creater(detail));
        dispatch(searcher(fors))
        
    },[fors])

    const handleErrors = (errors) => { };

    const registerOptions = {
        text: { required: "> type is required" },
    }



    return (
        <>
            {result.loading?<Loading/>:null}
            <Header />
           
            <motion.div className='search-box'
             initial={{y:-200}}
             animate={{x:0,y:10}}
             transition={{ delay:0.3 ,duration:.4,ease:'easeInOut', type:"tween"}}
             exit={{y:-200}}
            
            >
               
                <form onSubmit={handleSubmit(search, handleErrors)}>
                    <p>
                        <input type="text" name='text' placeholder='write topic : mongodb, react....' {...register('text', registerOptions.text)}  />
                        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </p>
                </form>
                
                <span style={{color:"white"}} className='search-for'>result for : {fors}</span>
                
            </motion.div>
           
           

            <div className="searched">

            {result.search === undefined?(
                null
            ):(
                result.search.data &&
                result.search.data.map((d,idx)=>{
                    return (
                        <span key={idx} style={{color:"white"}}><Link to={`/posts/${d._id}/${d.title}`}><i className="fa-solid fa-link"></i> {d.title}</Link></span>
                    )
                })

            )}
            </div>

        </>
    )
}

export default Search

import { DELETE_FAIL, DELETE_REQ, DELETE_SUCC, SEARCH_FAIL, SEARCH_REQ, SEARCH_SUCC } from "./actiontype";
import axios from "axios"


const seareq=()=>{
    return {
        type:SEARCH_REQ
    }
}

const seasucc = (data) =>{
    return{
        type:SEARCH_SUCC,
        payload:data
    }
}

const seafail = (err)=>{
    return {
        type:SEARCH_FAIL,
        payload:err,
    }
}

export const searcher = (query) =>{
    return(dispatch)=>{
        dispatch(seareq());

        axios.get(`https://widepost-api.onrender.com/post/topic/${query}`)
        .then((res)=>{
            const data = res.data;
            // console.log(data,"from server --")
            dispatch(seasucc(data));
        }).catch((err)=>{
            dispatch(seafail(err))
        })
    }
}

const delreq = ()=>{
    return{
        type:DELETE_REQ
    }
}

const delsucc = (data) =>{
    return{
        type:DELETE_SUCC,
        payload:data,
    }
}

const delfail = (err)=>{
    return {
        type:DELETE_FAIL,
        payload:err.message
    }
}

export const deletebyId = (id,title) =>{
    return(dispatch)=>{
        dispatch(delreq());

        axios.get(`https://widepost-api.onrender.com/post/delete/${title}/${id}`)
        .then((res)=>{
            const result = res.data.result;
            // console.log(result," acdjklsd")
            dispatch(delsucc(result));
        }).catch((err)=>{
            dispatch(delfail(err))
        })
    }
}
import {POST_REQUEST,POST_SUCCESS,POST_FAILURE,ROOT_SUCC} from "./actiontype"
import axios from "axios"



const fetchpost = () =>{
    return{
        type:POST_REQUEST
    }
}

const successpost = (data) =>{
    return{
        type:POST_SUCCESS,
        payload:data
    }
}

const rootsucc = (data) =>{
    return{
        type:ROOT_SUCC,
        payload:data
    }
}

const failpost = (err) =>{
    return{
        type:POST_FAILURE,
        payload:err
    }
}


export const PostList = () =>{
    return(dispatch) =>{
        dispatch(fetchpost);

        axios.get("https://widepost-api.onrender.com/post/")
        .then((res)=>{
            const list = res.data;
            // console.log(list,"_____ seerver root")
            dispatch(rootsucc(list.root))
            dispatch(successpost(list.result));
        
        }).catch((err)=>{
            dispatch(failpost(err.message));
        })

    }

}

///----------for post details ----------------


const detailsucc = (data) =>{
    return{
        type:"SUCC_DETAIL",
        payload:data,
    }
}



export const detail = ()=>{
    return(dispatch)=>{
        axios.get("https://widepost-api.onrender.com/post")
        .then((res)=> {
            const post = res.data.result;
            const find = localStorage.getItem("getid");
            // console.log(post);
            post.map((e)=>{
                if(e._id == find){
                    dispatch(detailsucc(e))
                    return
                }
                return
            })
        })
 
    }

}














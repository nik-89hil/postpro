import { USER_FAIL, USER_REQ, USER_SUCC } from './actiontype';
import axios from 'axios';

const userreq = () =>{
    return{
        type:USER_REQ
    }
}

const usersucc = (data) =>{
    return{
        type:USER_SUCC,
        payload:data
    }
}


const userfail = (err) =>{
    return{
        type:USER_FAIL,
        payload:err.message
    }
}

export const accountholder = (data) =>{
    return(dispatch)=>{

        dispatch(userreq());
        // console.log(data,"---1")

        axios.post('http://localhost:8080/user/login',{
            ...data
        }).then((res)=>{
            const ans = res.data;
            // console.log(ans ,"---2")
            localStorage.setItem("user",JSON.stringify(ans));
            dispatch(usersucc(ans));
        }).catch((err)=>{
            dispatch(userfail(err));
        })

    }
}












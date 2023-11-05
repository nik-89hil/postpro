import { USER_FAIL, USER_REQ, USER_SUCC } from "./actiontype"



const intialuser = {
    loading:false,
    user:JSON.parse(localStorage.getItem("user")) === null ?[]:[JSON.parse(localStorage.getItem("user"))],
    err:'',
}

export const userReducer = (state = intialuser , action ) =>{
    switch(action.type){
        case USER_REQ:
            return{
                ...state,
                loading:true
            }
        case USER_SUCC:
            return{
                ...state,
                loading:true,
                user:[action.payload],
            }
        case USER_FAIL:
            return{
                ...state,
                loading:true,
                err:action.payload
            }
        default : return state
    }

}
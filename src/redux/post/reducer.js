import {  POST_FAILURE, POST_REQUEST, POST_SUCCESS,ROOT_SUCC } from "./actiontype"

const intialstate = {
    loading:true,
    post:[],
    err:"",
    root:[]
}

export const postReducer = (state = intialstate , action) =>{
    switch(action.type){
        case POST_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case POST_SUCCESS:
            return{
                ...state,
                loading:false,
                post:action.payload
            }
        case ROOT_SUCC:
            return{
                ...state,
                root:action.payload
            }
        case POST_FAILURE:
            return{
                ...state,
                err:action.payload
            }
        default : return state
    } 
}



const detailinitial = {
    details:[],
    err:""
}

export const detailReducer = (state =detailReducer,action)=>{
    switch(action.type){
        case "SUCC_DETAIL":
            return{
                ...state,
                details:action.payload,
            }
        case "FAIL_DETAIL":
            return{
                ...state,
                err:action.payload,
            }
        default : return state
    }
}




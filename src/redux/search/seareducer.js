import { DELETE_REQ, DELETE_SUCC, SEARCH_FAIL, SEARCH_REQ, SEARCH_SUCC } from "./actiontype"

const initialvalue ={
    loading:true,
    search:[],
    err :""
}


export const searchReducer = (state=initialvalue,action)=>{
    switch(action.type){
        case SEARCH_REQ:
            return{
                ...state,
                loading:true
            }
        case SEARCH_SUCC:
            return{
                ...state,
                loading:false,
                search:action.payload,
            }
        case SEARCH_FAIL:
            return{
                ...state,
                loading:true,
                err:action.payload
            }
        default : return state
    }

}



const deletevalue ={
    loading:true,
    deletesuccess:false,
    err:""
}

export const deleteReducer = (state=deletevalue,action)=>{
    switch(action.type){
        case DELETE_REQ:
            return{
                ...state,
                loading:true
            }
        case DELETE_SUCC:
            return{
                ...state,
                deletesuccess:action.payload,
            }
        case SEARCH_FAIL:
            return{
                ...state,
                loading:true,
                err:action.payload
            }
        default : return state
    }

}
const IMAGE_SUCC = "IMAGE_SUCC";
const IMAGE_FAIL = "IMAGE_FAIL";



export const succimg = (data) =>{
    return{
        type:IMAGE_SUCC,
        payload:data
    }
}

export const failimg = (err) =>{
    return{
        type:IMAGE_FAIL,
        payload:err
    }
}

const imgReducerinital = {
    err:"",
    images:[],
}

export const imgReducer = (state = imgReducerinital,action)=>{
    switch(action.type){
        case IMAGE_SUCC:
            return{
                ...state,
                images:[action.payload],
            }
        case IMAGE_FAIL:
            return{
                ...state,
                err:action.payload,
            }
        default : return state
    }
}
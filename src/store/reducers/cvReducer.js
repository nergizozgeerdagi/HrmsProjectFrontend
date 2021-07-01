import { GET_ALL_BY_USER_ID, GET_METHOD_ERROR, GET_METHOD_STARTED } from "../actions/cvActions";
import { resumeState } from "../initialValues/cvState";



const initialState = {
    data:resumeState,
    loading:false,
    err:null
}

export default function cvReducer(state=initialState,{type,payload}){
   switch(type){
       case GET_METHOD_STARTED:
           return{
               ...state,
               loading:true,
               err:null
           }
       case GET_METHOD_ERROR:
           return{
               ...state,
               loading:false,
               err:payload
           }
       case GET_ALL_BY_USER_ID:
           return{
               ...state,
               loading:false,
               data:payload,
               err:null
           } 
       default:
           return state;
   }
}
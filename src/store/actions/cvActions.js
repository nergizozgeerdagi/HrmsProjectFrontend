import ResumeService from "../../services/resumeService";
import {error as errorAlert} from './alertActions';

export const GET_METHOD_STARTED = "GET_METHOD_STARTED";
export const GET_METHOD_ERROR = "GET_METHOD_ERROR";
export const GET_ALL_BY_USER_ID = "GET_ALL_BY_USER_ID";

export function getAllByUserId(resumes){
    return {
        type:GET_ALL_BY_USER_ID,
        payload:resumes
    }
}
export function getMethodStarted(){
    return{
        type:GET_METHOD_STARTED
    }
}
export function getMethodError(err){
    return{
        type:GET_METHOD_ERROR,
        payload:err
    }
}


export function getAllByUserIdAsync(id){
    return async function(dispatch){
        let resumeService = new ResumeService();
        resumeService.getAllByUserId(id).then(response=>{
            if(response.data.success){
                 dispatch(getAllByUserId(response.data.data));
            }else{
                errorAlert(response.data.message);
            }
        }).catch(error=>{
            errorAlert(error.data.message);
        })
    }
}
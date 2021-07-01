export const SUCCESS="SUCCESS";
export const INFO = "INFO";
export const ERROR = "ERROR";


export function success(message){
       return {
           type:SUCCESS,
           payload:message
       }
}

export function info(message){
    return {
        type:INFO,
        payload:message
    }
}

export function error(message){
    return {
        type:ERROR,
        payload:message
    }
}
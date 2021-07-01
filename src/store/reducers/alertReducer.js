import { INFO } from '../actions/alertActions';
import { SUCCESS } from '../actions/alertActions';
import { ERROR } from '../actions/alertActions';
import { toast } from "react-toastify";

const initialState={

}
export default function alertReducer(state=initialState,{type,payload}){
     switch(type){
         case INFO:
             toast.info(payload);
             return;
         case ERROR:
             toast.error(payload);
             break;
         case SUCCESS:
            toast.success(payload);
             break;
         default:
             return state;
     }
}
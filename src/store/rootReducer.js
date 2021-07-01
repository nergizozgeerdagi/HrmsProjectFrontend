import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import cvReducer from "./reducers/cvReducer";



const rootReducer = combineReducers({
    auth:authReducer,
    alert:alertReducer,
    resumes:cvReducer
})

export default rootReducer;
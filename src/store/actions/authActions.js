import EmployeeService from "../../services/employeeService";
import {error as errorAlert, success as successAlert} from './alertActions';
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn(user) {
  return {
    type: SIGN_IN,
    payload: user,
  };
}
export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function loginAsync(user, history) {
  return async function (dispatch) {
    let employeeService = new EmployeeService();
    await employeeService
      .login(user)
      .then((response) => {
        if(response.data.success){
           history.push("/homepage");
           dispatch(signIn(response.data.data));
           dispatch(successAlert(response.data.message));
        }else{
          dispatch(errorAlert(response.data.message));
        }
      })
      .catch((error) => {
        errorAlert(error);
      });
  };
  
}
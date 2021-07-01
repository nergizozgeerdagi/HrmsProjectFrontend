import axios from 'axios'
export default class EmployeeService{
    register(data){
        return axios.post("http://www.localhost:1617/api/employees/register",data)
    }
    async login(data){
        return await axios.post("http://www.localhost:1617/api/employees/login",data);
    }
}
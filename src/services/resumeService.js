import axios from "axios";

export default class ResumeService{
     getAll(){
         return axios.get("http://localhost:1617/api/resumees/getall");
     }
     getAllByUserId(id){
         return axios.get("http://localhost:1617/api/resumees/getallByEmployeeId?id="+id);
     }
     getDetailsById(id){
        return axios.get("http://localhost:1617/api/resumees/getDetailsById?id="+id);
    }
}
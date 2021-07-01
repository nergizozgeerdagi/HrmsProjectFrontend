import axios from "axios";

export default class JobPositionsService {
  getAll() {
    return axios.get("http://localhost:1617/api/jobpositions/getall");
  }
  getAllWithCount() {
    return axios.get("http://localhost:1617/api/jobpositions/getAllWithJobAdCount");
  }
  getById(id){
    return axios.get("http://localhost:1617/api/jobpositions/getbyid?id="+id);
  }
  add(jobPositionName){
      return axios.post("http://localhost:1617/api/jobpositions/add",{
        positionName:jobPositionName
      });
  }
}
import axios from 'axios'
export default class JobAdvertisementService{
    getJobAds(){
        return axios.get("http://www.localhost:1617/api/jobadvertisements/getAllActiveAndApproved")
    }
    getJobAdsOrderByDate(){
        return axios.get("http://www.localhost:1617/api/jobadvertisements/getAllActiveOrderByDate")
    }
    
}
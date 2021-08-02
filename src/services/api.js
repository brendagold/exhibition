import axios from "axios";

const api = axios.create({
    baseURL:"https://cdn.contentful.com//spaces/nbe8tmkxy59u/environments/master/entries?access_token=ynfiaMt1N5Skp8U-uq7Z49Xc9OSl6g-je6-cEcapCqU&content_type=exhibition"
    
    
})

export default api;
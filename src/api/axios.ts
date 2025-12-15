import axios from "axios";

const axiosClient:any = axios.create({
  baseURL: "https://www.omdbapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey: "baec14f6",
  },
});

export default axiosClient;

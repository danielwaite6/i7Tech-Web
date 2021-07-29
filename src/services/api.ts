import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});
export { api };

//192.168.1.7
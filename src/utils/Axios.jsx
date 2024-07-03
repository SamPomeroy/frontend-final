import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3000/user', 
    timeout: 50000,
})
export default Axios
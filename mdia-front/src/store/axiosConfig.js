import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});



/* import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    // TODO: handle 401s
    // if (error.response.status == 401) {
    //   router.replace('/login')
    // }
    // handleErrorMessage
    return Promise.reject(error)
})

export default axios  */
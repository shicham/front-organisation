import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'http://51.68.44.179:8001/api/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})
// request interceptor

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    const res = response.data
    
    // if the custom code is not 20000, it is judged as an error.
    return res
  },
  error => {
    console.log('errrrrrrrrx' + error) // for debug
    
    return Promise.reject(error)
  }
)

export default service

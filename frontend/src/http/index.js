import axios from 'axios'

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URl
})

const $authHost = axios.create({

})

const authInterceptor = config => {
  config.headers.authorization =
    `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}
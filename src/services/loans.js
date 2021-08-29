import axios from 'axios'
import i18n from '../i18n/index'

const baseUrl = i18n.TOGGABLE.BASE_URL +  'loans'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getById = (id) => {    
  const request = axios.get(`${baseUrl}/${id}`)  
  return request.then(response => response.data)
}

const getByIdBook = (id) => {  
  
  const request = axios.get(`${baseUrl}/book/${id}`)  
  return request.then(response => response.data)
}

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  return request.then(response => response.data)
}

export default { getAll, create, update, setToken,getById,getByIdBook }
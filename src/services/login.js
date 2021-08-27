import axios from 'axios'
import i18n from '../i18n/index'

const baseUrl = i18n.TOGGABLE.BASE_URL +  'login'

const login = async credentials => {
    
  const { data } = await axios.post(baseUrl, credentials)
  
  return data
}

export default {login}
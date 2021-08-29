import React from 'react'; 

const Session = () => {  
  const valita = window.localStorage.getItem('loggedUser')    
  if (!valita) {
    return null
  }else{
    return  JSON.parse(valita)
  }

}

export default Session
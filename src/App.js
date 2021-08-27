import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import LoginForm from './Componets/LoginForm'
import Notification from './Componets/Notification'
import { BrowserRouter, Route, Link } from "react-router-dom"

import './App.css';

const App = () => {

  const [notes, setNotes] = useState([])   
  const [showAll, setShowAll] = useState(true)
  
  const [errorMessage, setErrorMessage] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)

  

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        email,
        password
      })

      
      if(user.code === 'OK'){
        window.localStorage.setItem(
          'loggedUser', JSON.stringify({
            user:email
          })
        )
      }        

      setUser(user)
      setEmail('')
      setPassword('')
    } catch(e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }



  return (
    <div className="App">
      <header className="App-header">         
        <p>
         Login
        </p>
        <LoginForm
              email={email}
              password={password}
              handleUsernameChange={
                ({target}) => setEmail(target.value)}
              handlePasswordChange={
                ({target}) => setPassword(target.value)
              }
              handleSubmit={handleLogin}
            />
        <Notification message={errorMessage} />     
      </header>
    </div>
  );
}

export default App;

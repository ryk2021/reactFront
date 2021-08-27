import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import LoginForm from './Componets/LoginForm'
import Notification from './Componets/Notification'
import Library from './Library'
import { BrowserRouter as Router, Redirect, Route,Switch,useHistory} from "react-router-dom"
import './App.css';

const App = () => {
 
  let history = useHistory();
  
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

      debugger
      if(user.code === 'OK'){
        window.localStorage.setItem(
          'loggedUser', JSON.stringify({
            user:email
          })
        )
        
        history.push("Library");
        
        //return <Redirect to="Library"></Redirect>
      }
      else{
        setErrorMessage(`user not found` )
      }        

      setUser(user)
      setEmail('')
      setPassword('')


    } catch(e) {
      setErrorMessage(`Wrong credentials ${e}` )
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
        <Router>
          <Switch>          
          <Route path="/Library" component={Library}>                    
          </Route>
          </Switch>            
        </Router>

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

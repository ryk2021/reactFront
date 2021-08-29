import React from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'


export default function LoginForm ({handleSubmit, ...props}) {
  return (    
    
    <Togglable buttonLabel='Show Login'>    
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type='text'
                          value={props.username}
                          name='email'
                          placeholder='Enter email'
                          onChange={props.handleUsernameChange} 
                          className="form-control" 
                          aria-describedby="emailHelp"/>    
            </div>
            <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input  type='password'
                          value={props.password}
                          name='Password'
                          placeholder='Password'
                          onChange={props.handlePasswordChange}
                          className="form-control"/>
            </div> 
            <button id='' className="btn btn-primary">Login</button>
        </form>        
    </Togglable>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,

}
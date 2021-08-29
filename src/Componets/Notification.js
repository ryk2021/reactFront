import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    // <div class="alert alert-primary" role="alert">
    //   {message}
    // </div>
    <span className="badge badge-info">{message}</span>
  )
}

export default Notification
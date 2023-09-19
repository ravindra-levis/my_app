import React, { useState } from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {

  const[action,setAction]=useState("SignUp");
  return (
<>
  <div className='container'>
    <div className="header">
      <div className="title">{action}</div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
              <input type="text" placeholder='username'/></div>}
            <div className="input">Email
              <input type="email" placeholder='email'/></div>
            <div className="input">Password
              <input type="password" placeholder='Password' />
          </div>
          {action==="SignUp"?<div></div>:
          <div className="forgot">Forgot Password?</div>}
          <div className="submitcontainer">
            <div className={action==="Login"?"sumbit gray":"submit"}onClick={()=>{setAction("SignUp")}}>SignUp</div>
            <div className={action==="SignUp"?"sumbit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
          </div>
        </div>
  </div>
</>
  )
}

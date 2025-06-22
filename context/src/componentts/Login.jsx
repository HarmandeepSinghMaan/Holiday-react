import React, { useState,userContext } from 'react'
import UserContext from '../context/context'

function Login() {
  const [username,setUseranme]= useState('')
  const [password,setpassword]= useState('')
  const {setUser} = userContext(UserContext);

  const handelSubmit=(e)=>
  {
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      <h2>Login</h2>
      <label>UserName</label>
      <input type='text' placeholder='Enter'
      value={username}
      onChange={(e)=>setUseranme(e.target.value)}/>

      <input type='text' placeholder='password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)} />

      <button>
          onclick={handelSubmit}
      </button>
      
    </div>
  )
}

export default Login

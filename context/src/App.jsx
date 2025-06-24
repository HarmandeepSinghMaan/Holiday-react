import { useState } from 'react'
import React from 'react'
import UserContextProvider from './context/userContextProvider'
import './App.css'
import Login from './componentts/Login'
import Profile from './componentts/Profile'
function App() {
  

  return (
    <UserContextProvider>

      <h1>hello harman</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

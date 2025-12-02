import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './UserLogin/Login'
import UserDetails from './UserLogin/UserDetails'

function App() {

  return (
    <>
    {/* step 2 wrapping component */}
      <UserContextProvider>
        <Login /> {/* consumes it using useContext(UserContext) */}
        <UserDetails />
      </UserContextProvider>
    </>
  )
}

export default App

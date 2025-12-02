import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './UserLogin/Login.jsx'
import UserDetails from './UserLogin/UserDetails.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Login />}></Route>
    <Route path='/details' element={<UserDetails />}></Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* trying to router with contex provider for understanding please use App here */}
     
    <UserContextProvider>
    <RouterProvider  router={route}/>
    </UserContextProvider>
    {/* <App></App> */}
  </StrictMode>,
)

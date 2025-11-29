import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import AllPostDisplay from './components/AllPostDisplay.jsx'
import { listAllPost, listPerticularPost } from './components/Loader.js'
import SelectedPost from './components/SelectedPost.jsx'

// this will display this UI before/delay in loading data
function hydrolicFallback() {
  return (<p>Loading data</p>)
}

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent is layout inside that we are passing the child
    <Route path='/' element={<Layout />} HydrateFallback={hydrolicFallback} >
      <Route path='' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/:category/:number' element={<Product />}></Route>
      {/* <Route path='/posts' loader={listAllPost} element={<AllPostDisplay />}></Route> */}
      {/* trying lazy loading */}
      <Route path='/posts' lazy={async () => {
        const modelcom = await import('./components/AllPostDisplay.jsx')
        const lodercom = await import('./components/Loader.js')
        return {
          Component: modelcom.default,
          loader: lodercom.listAllPost
        }
      }}></Route>
      <Route path='posts/:id' loader={listPerticularPost} element={<SelectedPost />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

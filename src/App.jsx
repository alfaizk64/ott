import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Webseries from './components/Webseries'

const route = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/webSeries',
    element:<Webseries/>
  }
])
function App() {
  return (
    <>
    <RouterProvider router={route}/>
      
    </>
  )
}

export default App

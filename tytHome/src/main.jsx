import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from 'react-router-dom'
import { RouterApp } from './Router/RouterApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RouterApp}></RouterProvider>
  </React.StrictMode>,
)

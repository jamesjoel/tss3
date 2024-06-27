import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter } from 'react-router-dom'
import AllRoutes from './components/shared/AllRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <AllRoutes/>

  </BrowserRouter>
)
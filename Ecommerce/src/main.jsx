import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { combineReducers,configureStore } from '@reduxjs/toolkit'
import CartSlice from '../redux/CartSlice.jsx'
import LoginUserSlice from '../redux/LoginUserSlice.jsx'
let rootReducer =combineReducers({CartSlice,LoginUserSlice})
let store = configureStore({reducer:rootReducer})
// here line 5 to 10 using redux code  and also line number 15 provider 

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>
  </React.StrictMode>,
)

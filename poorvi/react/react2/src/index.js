import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
/* HERE WE ARE IMPOE*/
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('index'));

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
 );



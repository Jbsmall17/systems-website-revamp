import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import Errorboundary from './components/Errorboundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Errorboundary>
        <App />
      </Errorboundary>
    </BrowserRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import dataStore from './components/data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={dataStore}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
)

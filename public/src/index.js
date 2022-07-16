import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1 className="loader">Loading...</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

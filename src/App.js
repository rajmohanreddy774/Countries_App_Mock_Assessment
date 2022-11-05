import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Home/>
      <Countries/>
      <Country/>

    </Router>
  )
}

export default App
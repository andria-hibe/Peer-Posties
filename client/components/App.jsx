
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import MainSection from './MainSection'
import Dashboard from './Dashboard'
import NavBar from './NavBar'


const App = () => {
  return (
    <Router>
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={MainSection}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Router>
  )
}

export default App

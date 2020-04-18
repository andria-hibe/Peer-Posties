
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import MainSection from './MainSection'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import MainFooter from "./MainFooter"


const App = () => {
  return (
    <Router>
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={MainSection}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/' component={MainFooter}/>
    </Router>
  )
}

export default App

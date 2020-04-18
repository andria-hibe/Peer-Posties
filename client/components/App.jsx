import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import MainSection from './MainSection'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={MainSection}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Router>
  )
}

export default App

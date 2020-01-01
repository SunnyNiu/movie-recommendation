import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'
import Nav from './Nav'

const App = () => (
  <div>
    <Router>
      <Route path='/' component={Nav} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/choosemovie' component={MovieOption} />
      </Switch>
    </Router>
  </div>
)

export default App

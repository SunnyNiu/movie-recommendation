import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'
import Nav from './Nav'

const App = () => (
  <React.Fragment>
    <Router>
      <Route path='/' component={Nav} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/choosemovie' component={MovieOption} />
      </Switch>
    </Router>
  </React.Fragment>
)

export default App

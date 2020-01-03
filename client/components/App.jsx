import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'
import Nav from './Nav'

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/choosemovie' component={MovieOption} />
    </Switch>
  </div>
)

export default App

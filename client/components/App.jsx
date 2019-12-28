import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/choosemovie' component={MovieOption} />
    </Switch>
  </React.Fragment>
)

export default App

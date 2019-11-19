import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/choosemovie' component={MovieOption} />
    </Switch>
  </div>
)

// todo: add more data in database which more than 10 movies for each genre
export default App

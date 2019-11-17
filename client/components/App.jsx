import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MovieOption from './MovieOption'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/choosemovie' component={MovieOption} />
        </Switch>
      </div>
    )
  }
}
export default App

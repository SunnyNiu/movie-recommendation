import React from 'react'
import { Route } from 'react-router-dom'

import Items from './Items'
import SimpleItems from './SimpleItems'
import Home from './Home'

const App = ({ children }) => (
  <div className="container">
    <Route exact path='/' component={Items} />
    <Route path='/simple' component={SimpleItems} />
    <Route exact path='/home' component={Home} />
  </div>
)

export default App

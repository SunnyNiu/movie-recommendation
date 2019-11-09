import React from 'react'
import { connect } from 'react-redux'

const App = ({ name }) => (
  <div className="container">
    <h1>{name}</h1>
  </div>
)

function mapStateToProps (state) {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps)(App)

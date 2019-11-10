import React from 'react'
import { connect } from 'react-redux'

const App = ({ name, image }) => (
  <div className="container">
    <h1>{name}</h1>
    <img src={image}/>
  </div>
)

function mapStateToProps (state) {
  return {
    name: state.name,
    image: state.image
  }
}

export default connect(mapStateToProps)(App)

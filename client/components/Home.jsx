import React from 'react'
const path = require('path')

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

class Home extends React.Component {
  state = {
    cardId: getRandomInt(1, 32)
  }

  componentDidMount () {
    this.setState({
      // items: localDb.getItems()
    })
  }

  nextMovie = () => {
    this.setState({
      cardId: getRandomInt(1, 32)
    })
  }

  render () {
    return (
      <div className='container group'>
        <img src={`/public/images/${this.state.cardId}.png`}/>
        <p>{this.state.cardId}</p>
        <button onClick={this.nextMovie}>Next Movie</button>
      </div>
    )
  }
}

export default Home

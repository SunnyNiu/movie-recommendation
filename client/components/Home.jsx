import React from 'react'

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

class Home extends React.Component {
  state = {
    cardId: getRandomInt(1, 32),
    genres: {
      Action: 0,
      Adventure: 0,
      Animation: 0,
      Biography: 0,
      Comedy: 0,
      Crime: 0,
      Drama: 0,
      Family: 0,
      Fantasy: 0,
      FilmNoir: 0,
      History: 0,
      Horror: 0,
      Music: 0,
      Musical: 0,
      Mystery: 0,
      Romance: 0,
      SciFi: 0,
      Sport: 0,
      Thriller: 0,
      War: 0,
      Western: 0
    }
  }

  componentDidMount () {
    this.setState({
      // items: localDb.getItems()
    })
  }

  updateCommentLikeDislike () {

  }
  nextMovie = () => {
    this.setState({
      cardId: getRandomInt(1, 32)
    })
  }

  render () {
    return (
      <div className='container'>
        {/* <img src={`/public/images/${this.state.cardId}.png`}/> */}
        <p>{this.state.cardId}</p>
      </div>
    )
  }
}

export default Home

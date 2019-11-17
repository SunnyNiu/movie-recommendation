import React from 'react'
import { connect } from 'react-redux'
import { MovieContainer, Title, MovieImg, LinkContainer } from '../app.styles'
import { Link } from 'react-router-dom'

class Recommendation extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const genres = this.props.genres
    let arr = Object.values(genres)
    let max = Math.max(...arr)

    const genresArray = []
    for (let [key, value] of Object.entries(genres)) {
      if (genres[key] === max) genresArray.push(key)
    }

    const { name, image } = this.props.movie
    return (<div className="container">
      <div className="notification">
        <MovieContainer>
          <Title>You Probably Like this Movie: {name} </Title>
          <MovieImg src={image} alt='movieImage'/>
        </MovieContainer>
        <LinkContainer to='/' > Back to Home! </LinkContainer>
      </div>
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    genres: state.genres,
    movie: state.movie
  }
}

export default connect(mapStateToProps)(Recommendation)

import React from 'react'
import { connect } from 'react-redux'
import { Button, MovieContainer, Title, MovieImg } from '../app.styles'

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
        <Button>
            Back to Home
        </Button>
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
const mapDispatchToProps = dispatch => ({
  fetchRecommendMovies: () => dispatch(fetchRecommendMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation)

import React from 'react'
import { connect } from 'react-redux'
import { MovieContainer, Title, MovieImg, BackToHomeButton } from '../app.styles'
import { withRouter } from 'react-router-dom'
import { clearAll, fetchRecommendMoviesNotInShowedBefore } from '../../redux/movie.actions'

class Recommendation extends React.Component {
  componentDidMount () {
    const { fetchRecommendMoviesNotInShowedBefore, moviesId, genres } = this.props
    const arr = Object.values(genres)
    const max = Math.max(...arr)
    const likedGenre = Object.keys(genres).find(key => genres[key] === max)
    fetchRecommendMoviesNotInShowedBefore(likedGenre, moviesId)
  }

  render () {
    const { history, movie: { name, image }, clearAll } = this.props

    return (<div className="container">
      <div className="notification">
        <MovieContainer>
          <Title>You Probably Like this Movie: {name} </Title>
          <MovieImg src={image} alt='movieImage'/>
        </MovieContainer>
        <BackToHomeButton onClick={() => { history.push('/'); clearAll() }}> Back to Home! </BackToHomeButton>
      </div>
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    genres: state.genres,
    movie: state.movie,
    moviesId: state.moviesId
  }
}

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAll()),
  fetchRecommendMoviesNotInShowedBefore: (genre, moviesId) => dispatch(fetchRecommendMoviesNotInShowedBefore(genre, moviesId))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recommendation))

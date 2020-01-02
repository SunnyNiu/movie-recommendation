import React from 'react'
import { connect } from 'react-redux'
import { Title, Button, MovieContainer } from '../Recommendation.styles'
import { withRouter } from 'react-router-dom'
import { clearAll, fetchRecommendMoviesCreator } from '../../redux/movie.actions'
import Movie from './Movie'

class Recommendation extends React.Component {
  componentDidMount () {
    this.props.fetchRecommendMovies(this.props.likedMovies)
  }

  render () {
    const { history, movies, clearAll } = this.props
    const recommendMovies = movies[0]
    return (
      <MovieContainer>
        <Title>You Probably Like these Movies:</Title>

        {recommendMovies === undefined ? ''
          : <div>
            {recommendMovies.map((movie, index) => <Movie key={index} movie={movie}></Movie>)}
          </div>
        }

        <Button onClick={() => { history.push('/'); clearAll() }}> Back to Home! </Button>
      </MovieContainer>
    )
  }
}

function mapStateToProps (state) {
  return {
    genres: state.genres,
    movie: state.movie,
    moviesId: state.moviesId,
    likedMovies: state.likedMovies,
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAll()),
  fetchRecommendMovies: (movies) => dispatch(fetchRecommendMoviesCreator(movies))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recommendation))

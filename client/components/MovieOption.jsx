import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'
import Recommendation from './Recommendation'
import { Button, Title } from '../Home.styles'

class MovieOption extends React.Component {
  componentDidMount () {
    const { fetchMovie, moviesId } = this.props
    fetchMovie(moviesId)
  }

  render () {
    const { fetchMovieGenresByMovieId, fetchMovie, moviesId, movie: { id, name, image } } = this.props

    return (<div>
      {moviesId.length > 10 ? (<Recommendation/>) : (
        <div className="notification">
          <div>
            <Title>{name}</Title>
            <img src={image} alt='movieImage'/>
          </div>
          <Button
            onClick={() => { fetchMovieGenresByMovieId(id, 'dislike'); fetchMovie(moviesId) }}>
          👎 Dislike
          </Button>
          <Button
            onClick={() => { fetchMovieGenresByMovieId(id, 'like'); fetchMovie(moviesId) }}>
         👍 Like
          </Button>
        </div>
      )}
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    movie: state.movie,
    genres: state.genres,
    moviesId: state.moviesId
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovie: (moviesId) => dispatch(fetchMovie(moviesId)),
  fetchMovieGenresByMovieId: (moveId, option) => dispatch(fetchMovieGenresByMovieId(moveId, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieOption)

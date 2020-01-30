import React from 'react'
import { connect } from 'react-redux'
import { fetchMovieCreator, likeMovieCreator } from '../../redux/movie.actions'
import Recommendation from './Recommendation'
import { Button, Title, MovieContainer, Img } from '../MovieOptionStyles'

class MovieOption extends React.Component {
  componentWillMount () {
    const { fetchMovie, moviesId } = this.props
    fetchMovie(moviesId)
  }

  render () {
    const { fetchMovie, moviesId, likeMovie, movie: { name, image } } = this.props

    return (<div>
      {moviesId.length > 10 ? (<Recommendation/>) : (
        <MovieContainer>
          <div>
            <Title>{name}</Title>
            <Img src={image} alt='movieImage'/>
          </div>
          <div>
            <Button
              onClick={() => { fetchMovie(moviesId) }}>
              🤲 Skip
            </Button>
            <Button
              onClick={() => { likeMovie(name); fetchMovie(moviesId) }}>
              👍 Like
            </Button>
          </div>
        </MovieContainer>
      )}
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    movie: state.movie,
    moviesId: state.moviesId
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovie: (moviesId) => dispatch(fetchMovieCreator(moviesId)),
  likeMovie: (name) => dispatch(likeMovieCreator(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieOption)

import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'
import Recommendation from './Recommendation'
import { Button, Title, MovieContainer, Container, ButtonContainer, Img } from '../MovieOption.styles'

class MovieOption extends React.Component {
  componentDidMount () {
    const { fetchMovie, moviesId } = this.props
    fetchMovie(moviesId)
  }

  render () {
    const { fetchMovieGenresByMovieId, fetchMovie, moviesId, movie: { id, name, image } } = this.props

    return (<Container>
      {moviesId.length > 10 ? (<Recommendation/>) : (
        <MovieContainer>
          <div>
            <Title>{name}</Title>
            <Img src={image} alt='movieImage'/>
          </div>
          <ButtonContainer>
            <Button
              onClick={() => { fetchMovie(moviesId) }}>
              🤲 Skip
            </Button>
            <Button
              onClick={() => { fetchMovieGenresByMovieId(id); fetchMovie(moviesId) }}>
         👍 Like
            </Button>
          </ButtonContainer>
        </MovieContainer>
      )}
    </Container>)
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

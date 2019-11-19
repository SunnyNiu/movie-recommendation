import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'
import Recommendation from './Recommendation'
import { Button, Container, MovieImg, Title, MovieContainer } from '../app.styles'

class MovieOption extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    count: 10
  }
  componentDidMount () {
    const { fetchMovie, moviesId } = this.props
    fetchMovie(moviesId)
  }

  addLikeCount =() => {
    this.setState({
      like: this.state.like + 1
    })
  }

  addDislikeCount =() => {
    this.setState({
      dislike: this.state.dislike + 1
    })
  }
  render () {
    const { dislike, like, count } = this.state
    const { fetchMovieGenresByMovieId, fetchMovie, moviesId, movie: { id, name, image } } = this.props

    return (<Container>
      {dislike + like >= count ? (<Recommendation/>) : (
        <div className="notification">
          <MovieContainer>
            <Title>{name}</Title>
            <MovieImg src={image} alt='movieImage'/>
          </MovieContainer>
          <Button
            onClick={() => { fetchMovieGenresByMovieId(id, 'dislike'); this.addDislikeCount(); fetchMovie(moviesId) }}>
          👎 Dislike
          </Button>
          <Button
            onClick={() => { fetchMovieGenresByMovieId(id, 'like'); this.addLikeCount(); fetchMovie(moviesId) }}>
         👍 Like
          </Button>
        </div>
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

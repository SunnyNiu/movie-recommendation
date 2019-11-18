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
    const { fetchMovie } = this.props
    fetchMovie()
  }

  addLikeAccount =() => {
    this.setState({
      like: this.state.like + 1
    })
  }

  addDislikeAccount =() => {
    this.setState({
      dislike: this.state.dislike + 1
    })
  }
  render () {
    const { id, name, image } = this.props.movie
    const { dislike, like, count } = this.state

    return (<Container>
      {dislike + like >= count ? (<Recommendation></Recommendation>) : (
        <div className="notification">
          <MovieContainer>
            <Title>{name}</Title>
            <MovieImg src={image} alt='movieImage'/>
          </MovieContainer>
          <Button
            onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'dislike'); this.addDislikeAccount(); this.props.fetchMovie(this.props.moviesId) }}>
          👎 Dislike
          </Button>
          <Button
            onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'like'); this.addLikeAccount(); this.props.fetchMovie(this.props.moviesId) }}>
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
  fetchMovie: () => dispatch(fetchMovie()),
  fetchMovieGenresByMovieId: (moveId, option) => dispatch(fetchMovieGenresByMovieId(moveId, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieOption)

import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'
import Recommand from './Recommand'
import { Button, Container, MovieImg, Title, MovieContainer } from '../app.styles'
// import HomePage from './pages/homepage/homepage.component'

class App extends React.Component {
  constructor (props) {
    super(),
    this.state = {
      like: 0,
      dislike: 0,
      count: 10
    }
    this.addLikeAccount = this.addLikeAccount.bind(this)
  }
  componentDidMount () {
    const { fetchMovie } = this.props
    fetchMovie()
  }

  addLikeAccount () {
    this.setState({
      like: this.state.like + 1
    })
  }

  addDislikeAccount () {
    this.setState({
      dislike: this.state.dislike + 1
    })
  }
  render () {
    const { id, name, image } = this.props.movie
    const { dislike, like, count } = this.state
    return (<Container>
      {dislike + like >= count ? (<Recommand></Recommand>) : (
        <div className="notification">
          <MovieContainer>
            <Title>{name}</Title>
            <MovieImg src={image} alt='movieImage'/>
          </MovieContainer>
          <Button
            className='pure-button' onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'dislike'); this.addDislikeAccount(); this.props.fetchMovie() }}>
          👎 Dislike
          </Button>
          <Button
            className='pure-button' onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'like'); this.addLikeAccount(); this.props.fetchMovie() }}>
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
    genres: state.genres
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovie: () => dispatch(fetchMovie()),
  fetchMovieGenresByMovieId: (moveId, option) => dispatch(fetchMovieGenresByMovieId(moveId, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

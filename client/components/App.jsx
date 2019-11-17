import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'

class App extends React.Component {
  constructor (props) {
    super(),
    this.state = {
      like: 0,
      dislike: 0
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
      like: this.state.dislike + 1
    })
  }
  render () {
    const { id, name, image } = this.props.movie

    return (<div className="container">
      <div className="notification">
        <h1>{id}</h1>
        <h2>{name}</h2>
        <img src={image}/>
        <button
          className='pure-button' onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'dislike'); this.addDislikeAccount() }}>
        Dislike
        </button>
        <button
          className='pure-button' onClick={() => { this.props.fetchMovieGenresByMovieId(id, 'like'); this.addLikeAccount() }}>
        Like
        </button>
        <button onClick={() => this.props.fetchMovie()}>Next Movie</button>
      </div>

    </div>)
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

import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchMovieGenresByMovieId } from '../../redux/movie.actions'

class App extends React.Component {
  constructor (props) {
    super()
  }
  componentDidMount () {
    const { fetchMovie } = this.props
    fetchMovie()
  }

  render () {
    const { id, name, image } = this.props.movie
    return (<div className="container">
      <div className="notification">
        <h1>{id}</h1>
        <h2>{name}</h2>
        <img src={image}/>
        <button
          className='pure-button' onClick={() => this.props.fetchMovieGenresByMovieId(id)}>
        Dislike
        </button>
        <button
          className='pure-button' onClick={() => this.props.fetchMovieGenresByMovieId(id)}>
        Like
        </button>
        <button onClick={() => this.props.fetchMovie()}>Next Movie</button>
      </div>

    </div>)
  }
}

function mapStateToProps (state) {
  return {
    movie: state.movie
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovie: () => dispatch(fetchMovie()),
  fetchMovieGenresByMovieId: (moveId) => dispatch(fetchMovieGenresByMovieId(moveId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

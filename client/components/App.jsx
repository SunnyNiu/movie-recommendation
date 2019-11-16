import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../redux/movie.actions'

class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      show: false
    }
    this.nextMovie = this.nextMovie.bind(this)
  }
  componentDidMount () {
    // const { fetchMovie } = this.props
    // fetchMovie()
  }

  nextMovie () {

  }
  render () {
    return (<div className="container">
      {this.state.show ? (<div className="notification">
        {/* <h1>{this.props.name}</h1>
        <img src={this.props.image}/> */}
        <button
          className='pure-button'>
        Dislike
        </button>
        <button
          className='pure-button'>
        Like
        </button>
        <button onClick={() => this.props.fetchMovie(this.state.inputValue)}>+</button>
      </div>) : null }

    </div>)
  }
}

function mapStateToProps (state) {
  return {
    movie: state.movie
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovie: () => dispatch(fetchMovie())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

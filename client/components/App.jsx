import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../redux/movie.actions'

class App extends React.Component {
  constructor (props) {
    super()
  }
  componentDidMount () {
    const { fetchMovie } = this.props
    fetchMovie()
  }

  render () {
    return (<div className="container">
      <div className="notification">
        <h1>{this.props.movie.id}</h1>
        <h2>{this.props.movie.name}</h2>
        <img src={this.props.movie.image}/>
        <button
          className='pure-button'>
        Dislike
        </button>
        <button
          className='pure-button'>
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
  fetchMovie: () => dispatch(fetchMovie())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react'
import { connect } from 'react-redux'
import { MovieContainer, Title, MovieImg, Button } from '../app.styles'
import { withRouter } from 'react-router-dom'
import { clearAll } from '../../redux/movie.actions'

class Recommendation extends React.Component {
  render () {
    const genres = this.props.genres
    let arr = Object.values(genres)
    let max = Math.max(...arr)
    const { history } = this.props

    const likedGenre = Object.keys(genres).find(key => genres[key] === max)

    const { name, image } = this.props.movie
    return (<div className="container">
      <div className="notification">
        <MovieContainer>
          <Title>You Probably Like this Movie: {name} </Title>
          <MovieImg src={image} alt='movieImage'/>
        </MovieContainer>
        <Button onClick={() => { history.push('/'); this.props.clearAll() }}> Back to Home! </Button>
      </div>
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    genres: state.genres,
    movie: state.movie
  }
}

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAll())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recommendation))

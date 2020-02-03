import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { fetchMovieCreator, likeMovieCreator } from '../redux/movie.actions'
import Recommendation from './Recommendation'
import { Button } from './Button.styles'

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-style: italic;
  font-size: 1rem;
  text-align: center;
  margin: 1em 0em;
`;

const Img = styled.img`
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 500px;
`;

class MovieExplorer extends React.Component {
  componentWillMount () {
    const { fetchMovie, moviesId } = this.props
    fetchMovie(moviesId)
  }

  render () {

    if (this.props.movie === null) return null;
    const { name, image } = this.props.movie;
    const { fetchMovie, moviesId, likeMovie } = this.props

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

export default connect(mapStateToProps, mapDispatchToProps)(MovieExplorer)

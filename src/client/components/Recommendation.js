import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Button } from './Button.styles'
import { withRouter } from 'react-router-dom'
import { clearAll, fetchRecommendMoviesCreator } from '../redux/movie.actions'
import Movie from './Movie'


export const Title = styled.h2`
  font-style: italic;
  font-size: 1rem;
  align-items: center;
  margin: 1rem, 0rem;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Recommendation extends React.Component {
  componentWillMount () {
    this.props.fetchRecommendMovies(this.props.likedMovies)
  }

  render () {
    const { history, movies, clearAll } = this.props
    const recommendMovies = movies[0]
    return (
      <MovieContainer>
        <Title>You Probably Like these Movies:</Title>

        {recommendMovies === undefined ? ''
          : <div>
            {recommendMovies.map((movie, index) => <Movie key={index} movie={movie}></Movie>)}
          </div>
        }

        <Button onClick={() => { history.push('/'); clearAll() }}> Back to Home! </Button>
      </MovieContainer>
    )
  }
}

function mapStateToProps (state) {
  return {
    likedMovies: state.likedMovies,
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAll()),
  fetchRecommendMovies: (movies) => dispatch(fetchRecommendMoviesCreator(movies))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recommendation))

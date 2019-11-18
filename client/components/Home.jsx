import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer } from '../app.styles'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    return (<HomePageContainer>
      <HomeContainer>
        <WelcomeTitle>Welcome!!!
          {` `}
          We will recommend movie you probably like based on your 10 choose! Have fun!!!</WelcomeTitle>

        <LinkContainer to='/choosemovie' > Start! </LinkContainer>
      </HomeContainer>
    </HomePageContainer>
    )
  }
}

function mapStateToProps (state) {
  return {
    movie: state.movie,
    genres: state.genres,
    moviesId: state.moviesId
  }
}
// const mapDispatchToProps = dispatch => ({
//   fetchMovie: () => dispatch(fetchMovie())
// })
export default connect(mapStateToProps)(Home)

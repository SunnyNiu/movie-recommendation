import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer, StartButton } from '../app.styles'

const Home = () =>
  (<HomePageContainer>
    <HomeContainer>
      <WelcomeTitle>
        Thumbs Up/Down 10 movies, we will recommend movies that you may like.
      </WelcomeTitle>
      <LinkContainer to='/choosemovie' > <StartButton>Start! </StartButton></LinkContainer>
    </HomeContainer>
  </HomePageContainer>
  )

export default Home

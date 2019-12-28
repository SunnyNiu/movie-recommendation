import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer, StartButton } from '../app.styles'

const Home = () =>
  (<HomePageContainer>
    <HomeContainer>
      <WelcomeTitle>
        Thumbs Up/Down 10 movies
      </WelcomeTitle>
      <LinkContainer to='/choosemovie' > <StartButton>Start! </StartButton></LinkContainer>
    </HomeContainer>
  </HomePageContainer>
  )

export default Home

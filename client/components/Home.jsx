import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, StartButton } from '../Home.styles'

const Home = () =>
  (<HomePageContainer>
    <WelcomeTitle>
        Thumbs Up/Skip 10 movies, we will recommend movies that you may like.
    </WelcomeTitle>
    <LinkContainer to='/choosemovie' > <StartButton>Start! </StartButton></LinkContainer>
  </HomePageContainer>
  )

export default Home

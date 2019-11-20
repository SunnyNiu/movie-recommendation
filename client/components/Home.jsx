import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer, StartButton } from '../app.styles'

const Home = () =>
  (<HomePageContainer>
    <HomeContainer>
      <WelcomeTitle>Welcome!!!
        {` `}
        We will recommend movie you probably like based on your 10 choose! Have fun!!!</WelcomeTitle>

      <LinkContainer to='/choosemovie' > <StartButton>Start! </StartButton></LinkContainer>
    </HomeContainer>
  </HomePageContainer>
  )

export default Home

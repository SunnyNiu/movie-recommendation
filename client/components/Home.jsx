import React from 'react'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer } from '../app.styles'

export const Home = () =>
  (<HomePageContainer>
    <HomeContainer>
      <WelcomeTitle>Welcome!!!
        <br></br>
        We will recommend movie you probably like based on your 10 choose! Have fun!!!</WelcomeTitle>

      <LinkContainer to='/choosemovie' > Start! </LinkContainer>
    </HomeContainer>
  </HomePageContainer>
  )

import React from 'react'
import { WelcomeTitle, LinkContainer, StartButton } from '../HomeStyles'
import Grid from './Grid'
import Cell from './Cell'

const Home = () =>
  (<Grid columns={3}>
    <Cell width ={3} center>
      <WelcomeTitle>
        Thumbs Up/Skip 10 movies, we will recommend 20 movies that you may like.
      </WelcomeTitle>
      <LinkContainer to='/choosemovie' > <StartButton>Start! </StartButton></LinkContainer>
    </Cell>
  </Grid>
  )

export default Home

import React from 'react'
import { HomePageContainer, WelcomeTitle } from '../app.styles'
import { Link } from 'react-router-dom'

export const Home = () =>
  (<HomePageContainer>
    <div className="notification">
      <WelcomeTitle>Welcome!!!
        <br></br>
        We will recommend movie you probably like based on your 10 choose! Have fun!!!</WelcomeTitle>
      {/* <MovieContainer>
        <MovieImg src='/images/movie-background-wall.jpg' alt='movies-images'></MovieImg>
      </MovieContainer> */}

      <Link to='/choosemovie' > Start! </Link>
    </div>
  </HomePageContainer>
  )

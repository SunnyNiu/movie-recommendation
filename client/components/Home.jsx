import React from 'react'
import { HomePageContainer, HomeContainerBackground } from '../app.styles'
import { Route, Switch, Link } from 'react-router-dom'
import App from './App'

export const Home = () =>
  (<HomePageContainer>
    <div className="notification">
      <p>Welcome!!! We will recommend movie you probably like based on your 10 choose! Have a fun</p>
      {/* <img src='/images/movie-background-wall.jpg' alt='movies-images'></img> */}
      <Link to='/choosemovie' > Start! </Link>
    </div>
  </HomePageContainer>
  )

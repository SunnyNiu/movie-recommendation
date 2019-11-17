import React from 'react'
import { HomePageContainer } from '../app.styles'
import { Route, Switch } from 'react-router-dom'
import App from './App'

export const Home = () =>
  (<HomePageContainer className="container">
    <div className="notification">
      <p>Welcome!!! We will recommend movie you probably like based on your 10 choose! Have a fun</p>
      <img src='/images/movie-background-wall.jpg' alt='movies-images'></img>
      <Switch>
        <Route exact path='/' render={(props) => (
          <App/>
        )} />
      </Switch>
    </div>
  </HomePageContainer>
  )

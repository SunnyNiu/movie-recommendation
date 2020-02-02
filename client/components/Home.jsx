import React from 'react'
import styled from 'styled-components';
import {StartButton } from '../HomeStyles'
import { Link } from 'react-router-dom';
import Grid from './Grid'
import Cell from './Cell'

const Image = styled.img`
  width: 450px;
`;

const Home = () =>
  (<Grid columns={3}>
    <Cell width ={3} center>
      <Image src="/images/analytic.png" alt="Analytic" />
      <p>
        Thumbs Up/Skip 10 movies, we will recommend 20 movies that you may like.
      </p>
      <Link to='/movie-explorer' > <StartButton>Start! </StartButton></Link>
    </Cell>
  </Grid>
  )

export default Home

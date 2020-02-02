import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from './Grid'
import Cell from './Cell'
import { Button } from '../MovieOptionStyles'

const Image = styled.img`
  width: 450px;
`;

const Home = () =>
  (<Grid columns={3}>
    <Cell width ={3} center>
    <Image src="/images/analytic.png" alt="Analytic" />
      <p>
        Thumbs Up/Skip 10 movies, we will recommend movies that you probably
        like according to your options
      </p>
      <Link to="/movie-explorer">
        <Button>Start</Button>
      </Link>
    </Cell>
  </Grid>
  )

export default Home

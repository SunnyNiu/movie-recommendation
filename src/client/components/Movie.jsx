import React from 'react'
import Grid from './Grid'
import Cell from './Cell'
import styled from 'styled-components';

export const MovieContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Movie = ({ movie }) => {
  const { Name, wTeaser, yUrl } = movie;

  return (
    <MovieContainer>
      <label>Movie:{Name}</label>{" "}
      <Grid columns="420px 1fr">
        <Cell minWidth="450px">
          <iframe
            title={Name}
            src={yUrl}
            width="400"
            height="300"
            frameBorder="0"
            allowFullScreen
          />
        </Cell>
        <Cell minWidth="450px">
          <p>{wTeaser}</p>
        </Cell>
      </Grid>
    </MovieContainer>
  );
};

export default Movie

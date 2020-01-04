import React from 'react'
import { MovieList } from '../RecommendationStyles'
import Grid from './Grid'
import Cell from './Cell'

class Movie extends React.Component {
  render () {
    const { Name, wTeaser, yUrl } = this.props.movie
    return (
      <MovieList>
        <label>Movie:{Name}</label>
        <Grid columns="420px 1fr">
          <Cell minWidth="450px">
            <iframe src={yUrl}
              width="400" height="300" frameBorder="0" allowFullScreen></iframe>
          </Cell>
          <Cell minWidth="450px">
            <p>{wTeaser}</p>
          </Cell>
        </Grid>
      </MovieList>
    )
  }
}

export default Movie

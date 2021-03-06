import {
  showMovie,
  movies,
  clearAll,
  likeMovieCreator,
} from '../src/client/redux/movie.actions';

import { searchMovie } from '../src/client/redux/movie.types';

describe('action tests', () => {
  it('showMovie return movie', () => {
    const movie = {
      id: '1',
      name: 'Joker (I) (2019)',
      image: '../images/1.png',
    };
    const expected = {
      type: searchMovie.NEXT_MOVIE,
      movie,
    };

    const actual = showMovie(movie);
    expect(actual).toEqual(expected);
  });

  it('movies return recommended movies', () => {
    const recommendedMovies = [
      { name: 'Joker (I) (2019)', des: 'xx' },
      { name: 'Your Name', des: 'yy' },
    ];
    const expected = {
      type: searchMovie.SHOW_MOVIES,
      movies: recommendedMovies,
    };

    const actual = movies(recommendedMovies);
    expect(actual).toEqual(expected);
  });

  it('it return liked movie', () => {
    const name = 'Iron man';
    const expected = {
      type: searchMovie.LIKE_MOVIE,
      name,
    };

    const actual = likeMovieCreator(name);
    expect(actual).toEqual(expected);
  });

  it('clearAll returns initial state', () => {
    const expected = {
      type: searchMovie.CLEAR_ALLSTATE,
    };

    const actual = clearAll();
    expect(actual).toEqual(expected);
  });
});

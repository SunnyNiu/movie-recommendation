import request from 'superagent';

export function getRecommendedMovies(movies) {
  const moviesJoinWithComma = movies.join(',');
  return request
    .get(`/recommendation/${moviesJoinWithComma}`)
    .then((response) => response.body)
    .catch((e) => {
      throw Error(
        `${e}, You need to implement an API route for /movies/recommendmovies`
      );
    });
}

export function getMoviesByIds(moviesId) {
  return request
    .get(`/movie?moviesId=${moviesId.join(',')}`)
    .then((response) => response.body)
    .catch((e) => {
      throw Error(
        `${e}, You need to implement an API route for /movie?moviesId=${moviesId.join(
          ', '
        )}`
      );
    });
}

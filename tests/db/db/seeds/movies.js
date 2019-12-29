exports.seed = (knex) =>
  knex('movies_genres').del()
    .then(() => knex('movies').del())
    .then(() => knex('genres').del())
    .then(() =>
      knex('movies').insert([
        { id: 1, name: 'Iron Man (2008)', image: '/images/1.png' },
        { id: 2, name: 'The Incredible Hulk (2008)', image: '/images/2.png' },
        { id: 3, name: 'Thor (2011)', image: '/images/1.png' },
        { id: 4, name: 'The Godfather: Part II  (1974)', image: '/images/1.png' },
        { id: 5, name: 'The Lives of Others  (2006)', image: '/images/1.png' }
      ]))
    .then(() =>
      knex('genres').insert([
        { id: 1, type: 'Action' },
        { id: 2, type: 'Adventure' },
        { id: 3, type: 'Animation' },
        { id: 4, type: 'Biography' },
        { id: 5, type: 'Comedy' },
        { id: 6, type: 'SciFi' },
        { id: 7, type: 'Thriller' },
        { id: 8, type: 'Fantasy' },
        { id: 9, type: 'Crime' },
        { id: 10, type: 'Drama' }
      ]))
    .then(() =>
      knex('movies_genres').insert([
        { id: 1, movie_id: 1, genre_id: 1 },
        { id: 2, movie_id: 1, genre_id: 2 },
        { id: 3, movie_id: 1, genre_id: 6 },
        { id: 4, movie_id: 2, genre_id: 1 },
        { id: 5, movie_id: 2, genre_id: 2 },
        { id: 6, movie_id: 2, genre_id: 6 },
        { id: 7, movie_id: 3, genre_id: 1 },
        { id: 8, movie_id: 3, genre_id: 2 },
        { id: 9, movie_id: 3, genre_id: 8 },
        { id: 10, movie_id: 4, genre_id: 9 },
        { id: 11, movie_id: 4, genre_id: 10 },
        { id: 12, movie_id: 5, genre_id: 7 },
        { id: 13, movie_id: 5, genre_id: 19 }
      ]))

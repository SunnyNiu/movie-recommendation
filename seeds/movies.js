exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, name: 'Joker (I) (2019)' },
        { id: 2, name: 'Iron Man (2008)' },
        { id: 3, name: 'The Incredible Hulk (2008)' },
        { id: 4, name: 'Iron Man 2 (2010)' },
        { id: 5, name: 'Thor (2011)' },
        { id: 6, name: 'Captain America: The First Avenger (2011)' },
        { id: 7, name: 'Marvels The Avengers (2019)' },
        { id: 8, name: ' The Godfather: Part II  (1974)' },
        { id: 9, name: 'The Lives of Others  (2006)' },
        { id: 10, name: ' Avengers: Infinity War (2018)' },
        { id: 11, name: 'The Dark Knight Rises (2012)' },
        { id: 12, name: 'Your Name. (2016)' },
        { id: 13, name: 'Coco (2017)' },
        { id: 14, name: '3 Idiots (2009)' },
        { id: 15, name: 'Like Stars on Earth (2007)' },
        { id: 16, name: 'Toy Story (1995)' },
        { id: 17, name: 'The Kid (1921)' },
        { id: 18, name: 'The Chaos Class (1975)' },
        { id: 19, name: 'Life Is Beautiful (1997)' },
        { id: 20, name: 'The Intouchables (2011)' },
        { id: 21, name: 'Back to the Future (1985)' },
        { id: 22, name: 'Modern Times (1936)' },
        { id: 23, name: 'Snatch (2000)' },
        { id: 24, name: 'Star Wars: Episode V - The Empire Strikes Back (1980)' },
        { id: 25, name: 'The Green Mile (1999)' },
        { id: 26, name: '12 Years a Slave (2013)' },
        { id: 27, name: 'Airlift (2016)' },
        { id: 28, name: 'Let the Right One In (2008)' },
        { id: 29, name: 'Night of the Living Dead (1968)' },
        { id: 30, name: 'I Saw the Devil (2010)' },
        { id: 31, name: 'Spirited Away (2001)' },
        { id: 32, name: 'The Prestige (2006)' }
      ])
    })
}

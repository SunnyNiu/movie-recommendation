# movie-recommendation
```Thump up/Skip 10 movies, it will recommend 20 movies based on your options.
It is developed using Redux, Express, JavaScript, Superagent, Knex, SQLite.
Unit testing using Jest, Supertest, Nock, Enzyme. 
E2E testing using Cypress.
Configured docker and yml file and automatically deploy to heroku when push code to master branch.

deployed to heroku,
https://moviesrecommend.herokuapp.com/
```

## Install & Setup the database & run && testing

After cloning this repo

```set up the database
npx knex migrate:latest
npx knex seed:run
```

```shell
yarn
yarn start
```

```Cypress E2E testing
yarn start
yarn cypress run 
```

```Unit testing
yarn test
```

## Things to look at

URL                                
-----------------------------------
http://localhost:3000/


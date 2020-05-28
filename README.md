# movie-recommendation

Deployed to heroku,
https://moviesrecommend.herokuapp.com/
```
Thump up/Skip 10 movies, it will recommend 20 movies based on your options.
It is developed using Redux, Express, JavaScript, Superagent, Knex, SQLite.
Unit testing using Jest, Supertest, Nock, Enzyme. 
E2E testing using Cypress.
Configured docker and yml file and automatically deploy to heroku when push code to master branch.

```

## Install & Setup the database & run && testing

After cloning this repo

```
set up the database
npx knex migrate:latest
npx knex seed:run
```

```
shell
yarn
yarn start
yarn dev
```

```
run all tests includes Cypress E2E testing and Unite testing
yarn ci:dev
```

```
Unit testing
yarn test
```

## Things to look at

URL                                
-----------------------------------
https://moviesrecommend.herokuapp.com/


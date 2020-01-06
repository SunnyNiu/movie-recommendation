# React Form Handling

Form handling in React.


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


# movie-recommendation
Thump up/Skip 10 movies, it will recommend 20 movies based on your options.
It is developed using Redux, Express, JavaScript, Superagent.
Unit testing using Jest, Supertest, Nock, Enzyme. 
E2E testing using Cypress.

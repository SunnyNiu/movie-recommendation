import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../redux/movie.reducer'
import { fetchMovie, fetchMovieGenresByMovieId, fetchRecommendMovies } from '../redux/movie.actions'

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

function render () {
  const root = document.getElementById('app')
  ReactDOM.render(<Provider store={store}><App /></Provider>, root)
}

render()
store.subscribe(render)
store.dispatch(fetchMovie())
store.dispatch(fetchMovieGenresByMovieId())
store.dispatch(fetchRecommendMovies())

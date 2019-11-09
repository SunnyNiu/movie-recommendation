import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../redux/movie.reducer'
import { fetchMovie } from '../redux/movie.actions'

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  )
})

store.subscribe(render)
store.dispatch(fetchMovie())

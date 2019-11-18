import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../redux/movie.reducer'
import { fetchMovie } from '../redux/movie.actions'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

function render () {
  const root = document.getElementById('app')
  ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, root)
}

render()
store.subscribe(render)

import React from 'react'
import { mount } from 'enzyme'
import Recommendation from '../../client/components/Recommendation'
import Movie from '../../client/components/Movie'
import { Button } from '../../client/RecommendationStyles'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

jest.mock('react-dom')
const mockStore = configureStore([])

describe('<Recommendation /> component tests', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      movie: '',
      moviesId: [],
      likedMovies: [],
      movies: []
    })

    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Recommendation />
        </MemoryRouter>
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

 
  it('should contains <Button />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Recommendation />
      </MemoryRouter>
    </Provider>)

    const actual = wrapper.containsMatchingElement(Button)
    expect(actual).toBe(expected)
  })

  it('should contains <Movie />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Recommendation />
      </MemoryRouter>
    </Provider>)

    const actual = wrapper.containsMatchingElement(Movie)
    expect(actual).toBe(expected)
  })
})

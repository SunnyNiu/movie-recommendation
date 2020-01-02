import React from 'react'
import { mount } from 'enzyme'
import Recommendation from '../../client/components/Recommendation'
import { Title, Button, MovieContainer, Img } from '../Recommendation.styles'
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
      genres: {
        Action: 0,
        Adventure: 0,
        Animation: 0,
        Biography: 0,
        Comedy: 0,
        Crime: 0,
        Drama: 0,
        Family: 0,
        Fantasy: 0,
        FilmNoir: 0,
        History: 0,
        Horror: 0,
        Music: 0,
        Musical: 0,
        Mystery: 0,
        Romance: 0,
        SciFi: 0,
        Sport: 0,
        Thriller: 0
      },
      moviesId: []
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

  it('should contains <MovieContainer />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Recommendation />
      </MemoryRouter>

    </Provider>)
    const actual = wrapper.containsMatchingElement(MovieContainer)
    expect(actual).toBe(expected)
  })

  it('should contains <Title />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Recommendation />
      </MemoryRouter>

    </Provider>)
    const actual = wrapper.containsMatchingElement(Title)
    expect(actual).toBe(expected)
  })

  it('should contains <Img />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Recommendation />
      </MemoryRouter>

    </Provider>)
    const actual = wrapper.containsMatchingElement(Img)
    expect(actual).toBe(expected)
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
})

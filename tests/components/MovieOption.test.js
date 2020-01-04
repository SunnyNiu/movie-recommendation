import React from 'react'
import { mount } from 'enzyme'
import MovieOption from '../../client/components/MovieOption'
import { Button, Title, MovieContainer, ButtonContainer, Img } from '../../client/MovieOptionStyles'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

jest.mock('react-dom')
const mockStore = configureStore([])

describe('<MovieOption /> component tests', () => {
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
        <MovieOption />
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should contains text Skip and Like', () => {
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    expect(wrapper.text()).toMatch('🤲 Skip👍 Like')
  })

  it('should contains <MovieContainer />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    const actual = wrapper.containsMatchingElement(MovieContainer)
    expect(actual).toBe(expected)
  })

  it('should contains <Button />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    const actual = wrapper.containsMatchingElement(Button)
    expect(actual).toBe(expected)
  })

  it('should contains <Title />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    const actual = wrapper.containsMatchingElement(Title)
    expect(actual).toBe(expected)
  })

  it('should contains <ButtonContainer />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    const actual = wrapper.containsMatchingElement(ButtonContainer)
    expect(actual).toBe(expected)
  })

  it('should contains <Img />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieOption />
    </Provider>)

    const actual = wrapper.containsMatchingElement(Img)
    expect(actual).toBe(expected)
  })
})

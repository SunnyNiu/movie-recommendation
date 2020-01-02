import React from 'react'
import { mount } from 'enzyme'
import MovieOption from '../../client/components/MovieOption'
import { Button, Title, MovieContainer, Container, ButtonContainer, Img } from '../MovieOption.styles'
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

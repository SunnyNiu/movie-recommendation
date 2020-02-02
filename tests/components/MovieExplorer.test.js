import React from 'react'
import { mount } from 'enzyme'
import MovieExplorer from '../../client/components/MovieExplorer'
import { Button} from '../../client/MovieOptionStyles'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

jest.mock('react-dom')
const mockStore = configureStore([])

describe('<MovieExplorer /> component tests', () => {
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
        <MovieExplorer />
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should contains text Skip and Like', () => {
    const wrapper = mount(<Provider store={store}>
      <MovieExplorer />
    </Provider>)

    expect(wrapper.text()).toMatch('🤲 Skip👍 Like')
  })

  it('should contains <Button />', () => {
    const expected = true
    const wrapper = mount(<Provider store={store}>
      <MovieExplorer />
    </Provider>)

    const actual = wrapper.containsMatchingElement(Button)
    expect(actual).toBe(expected)
  })
})

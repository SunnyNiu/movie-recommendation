import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Button } from '../../src/client/components/Button.styles';
import Movie from '../../src/client/components/Movie';
import Recommendation from '../../src/client/components/Recommendation';

jest.mock('react-dom');
const mockStore = configureStore([]);

describe('<Recommendation /> component tests', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      movie: '',
      moviesId: [],
      likedMovies: [],
      movies: [],
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Recommendation />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should contains <Button />', () => {
    const expected = true;
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recommendation />
        </MemoryRouter>
      </Provider>
    );

    const actual = wrapper.containsMatchingElement(Button);
    expect(actual).toBe(expected);
  });

  it('should contains <Movie />', () => {
    const expected = true;
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recommendation />
        </MemoryRouter>
      </Provider>
    );

    const actual = wrapper.containsMatchingElement(Movie);
    expect(actual).toBe(expected);
  });
});

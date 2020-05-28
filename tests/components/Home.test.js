import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Home from '../../src/client/components/Home';
import { Button } from '../../src/client/components/Button.styles';

describe('<Home /> component tests', () => {
  it('Home contains Start button', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expected = 'Start';
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').text()).toMatch(expected);
  });

  it('contains "Thumbs Up/Down 10 movies"', () => {
    const expected =
      'Thumbs Up/Skip 10 movies, we will recommend movies that you probably like according to your options';
    const component = <Home />;

    const wrapper = shallow(component);
    const actual = wrapper.text();
    expect(actual).toMatch(expected);
  });

  it('should contains <StartButton />', () => {
    const expected = true;
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const actual = wrapper.containsMatchingElement(Button);
    expect(actual).toBe(expected);
  });
});

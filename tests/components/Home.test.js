import React from 'react'
import { shallow, mount } from 'enzyme'
import Home from '../../client/components/Home'
import { MemoryRouter } from 'react-router'
import { WelcomeTitle, LinkContainer, StartButton } from '../../client/Home.styles'

describe('<Home /> component tests', () => {
  it('Home contains Start button', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const expected = 'Start!'
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toMatch(expected)
  })

  it('contains "Thumbs Up/Down 10 movies"', () => {
    const expected = 'Thumbs Up/Skip 10 movies, we will recommend 20 movies that you may like. Start!'
    const component = <Home />

    const wrapper = shallow(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })

  it('should contains <WelcomeTitle />', () => {
    const expected = true
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const actual = wrapper.containsMatchingElement(WelcomeTitle)
    expect(actual).toBe(expected)
  })

  it('should contains <LinkContainer />', () => {
    const expected = true
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const actual = wrapper.containsMatchingElement(LinkContainer)
    expect(actual).toBe(expected)
  })

  it('should contains <StartButton />', () => {
    const expected = true
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const actual = wrapper.containsMatchingElement(StartButton)
    expect(actual).toBe(expected)
  })
})

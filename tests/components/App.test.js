import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../../src/client/components/App'
import Home from '../../src/client/components/Home'
import MovieExplorer from '../../src/client/components/MovieExplorer'
import Header from '../../src/client/components/Header'
import { MemoryRouter } from 'react-router'

describe('<App /> component tests', () => {
  it('test invalid path should not contain Home or MovieExplorer', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(Home)).toHaveLength(0)
    expect(wrapper.find(MovieExplorer)).toHaveLength(0)
  })

  it('test home path should direct to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Home)).toHaveLength(1)
  })

  it('should contains <Header />', () => {
    const expected = true
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    const actual = wrapper.containsMatchingElement(Header)
    expect(actual).toBe(expected)
  })
})

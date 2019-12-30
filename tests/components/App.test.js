import React from 'react'
import { mount } from 'enzyme'
import App from '../../client/components/App'
import Home from '../../client/components/Home'
import MovieOption from '../../client/components/MovieOption'
import { MemoryRouter } from 'react-router'

jest.mock('../../client/components/app')

describe('<App /> component tests', () => {
  it('test invalid path should not contain Home or MovieOption', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Home)).toHaveLength(0)
    expect(wrapper.find(MovieOption)).toHaveLength(0)
  })

  it('test home path should direct to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Home)).toHaveLength(1)
  })
})

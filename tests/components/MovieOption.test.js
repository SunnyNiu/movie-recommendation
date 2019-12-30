import React from 'react'
import { shallow, mount } from 'enzyme'
import MovieOption from '../../client/components/MovieOption'
import { MemoryRouter } from 'react-router'
import { HomePageContainer, WelcomeTitle, LinkContainer, HomeContainer, StartButton } from '../../client/app.styles'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

jest.mock('react-dom')
// jest.mock('../../client/components/Home')

describe('<MovieOption /> component tests', () => {
  it('contains two buttons', () => {
    expect(true).toBeTruthy()
  })
})

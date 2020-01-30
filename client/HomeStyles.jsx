import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackToHomeButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  font-size: 2rem;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const StartButton = styled.button`
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const LinkContainer = styled(Link)`
height: 100%;
align-items: center;
font-size: 1.5rem;
font-style: italic;
`
export const WelcomeTitle = styled.p`
font-style: italic;
font-size: 2rem;
font-family: Arial, Helvetica, sans-serif;
align-items: center;
margin: 2em 0em
`

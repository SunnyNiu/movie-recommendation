import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0em 1em;
  font-size: 2rem;
  width:250px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const BackToHomeButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0 em 2.5em;
  font-size: 2rem;
  width:350px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const StartButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 2em 1em;
  padding: 0 em 2.5em;
  font-size: 2rem;
  width:350px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 500px;
`

export const MovieImg = styled.img`
  height: 500px;
  align-items: center;
`

export const Title = styled.h1`
font-size: 2rem;
font-family: Arial, Helvetica, sans-serif;
height: 120px;
text-align: center;
`

export const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 300px;
`

export const MovieContainer = styled.div`
align-items: center;
text-align: center;
`

export const WelcomeTitle = styled.p`
font-style: italic;
font-size: 2.5rem;
font-family: Arial, Helvetica, sans-serif;
align-items: center;
`

export const LinkContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 40px;
align-items: center;
font-size: 1.5rem;
font-style: italic;
`

export const HomeContainer = styled.div`
align-items: center;
background-color: white;
height: 500px;
`

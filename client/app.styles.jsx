import styled, { keyframes } from 'styled-components'

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
  margin: 0 1em;
  padding: 0.25em 2em;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const MovieImg = styled.img`
  /* animation: ${rotate360} infinite 120s linear; */
  height: 500px;
  /* &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  } */
`

export const Title = styled.h1`
font-size: 2rem;
font-family: Arial, Helvetica, sans-serif;
`

export const TwoColumn = styled.div`
display: grid
grid-template-columns: 1fr 1fr
`

export const Description = styled.p`
font-style: italic;
font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
`

export const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const MovieContainer = styled.div`
align-items: center;
`

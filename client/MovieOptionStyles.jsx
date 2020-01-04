import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0em 1em;
  font-size: 1rem;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
`
export const MovieContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Container = styled.div`
`

export const ButtonContainer = styled.div`
`
export const Img = styled.img`
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  opacity: 0.8;
  max-width:100%;
  max-height: 500px;
`

export const Title = styled.h1`
font-style: italic;
font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
align-items: center;
margin: 1em 0em
`

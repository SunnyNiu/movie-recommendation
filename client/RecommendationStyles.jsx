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

export const Title = styled.h1`
font-style: italic;
font-size: 1rem;
font-family: Andale Mono, monospace;
text-align: center;
align-items: center;
margin: 1em 0em
`
export const MovieList = styled.div`
font-size: 1rem;
margin:1rem;
padding:2px;
align-items: center;
text-align: center;
font-family: Andale Mono, monospace;
`

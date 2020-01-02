import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
background-color:  #635e4f !important;
font-size:1.5rem;
color: #F8F3F3 !important;
`

export const LogoContainer = styled(Link)`
height: 100%;
padding: 25px;
`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const OptionLink = styled(Link)`
${OptionContainerStyles}
`

export const OptionDiv = styled.div`
${OptionContainerStyles}
`

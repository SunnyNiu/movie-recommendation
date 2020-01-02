import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from '../Nav.styles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      Recommended Movies
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/register">
         REGISTER
      </OptionLink>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)

export default Header

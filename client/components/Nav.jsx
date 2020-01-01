import React from 'react'
import { connect } from 'react-redux'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from '../Nav.styles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      Tasted Movie
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/register">
         REGISTER
      </OptionLink>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)

export default connect(null)(Header)

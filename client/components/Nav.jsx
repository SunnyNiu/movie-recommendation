import React from 'react'
import { HeaderContainer, LogoContainer } from '../NavStyles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer >
      Recommended Movies
    </LogoContainer>

    {/* <OptionsContainer>
      <OptionLink to="/register">
         REGISTER
      </OptionLink>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
    </OptionsContainer> */}
  </HeaderContainer>
)

export default Header

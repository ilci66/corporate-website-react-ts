import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Logo from './Logo'
import NavbarLink from './NavbarLink'

const Navbar = (props: any) => {
  return (
    <Nav>
      <ContainerComponent>
        <Logo />
        <RightAlign>
          <NavbarLink to="about" />
          <NavbarLink to="we offer" />
          <NavbarLink to="portfolio" />
          <NavbarLink to="recent work" />
          <NavbarLink to="contact" />
          <NavbarLink to="portfolio" />
        </RightAlign>
      </ContainerComponent>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: var(--white);
  height: 100px;
  display: flex;
  flex-direction: row;
`
const RightAlign = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`

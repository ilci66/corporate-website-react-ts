import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Hamburger from './Hamburger'
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
        <Hamburger />
      </ContainerComponent>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  // backdrop-filter: blur(6px);
  background: white;
  height: var(--top-margin);
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  z-index: 2;
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

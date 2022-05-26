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
  // background: white;
  height: var(--top-margin);
  position: fixed;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 2;
  opacity: 0.9;
`
const RightAlign = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
`

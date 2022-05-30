import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Hamburger from './HamburgerComponent'
import Logo from './Logo'
import NavbarLink from './NavbarLink'

const Navbar = (props: { bgColor: string }) => {

  return (
    <Nav bgColor={props.bgColor} id="navbar">
      <ContainerComponent>
        <Logo />
        <RightAlign>
          <NavbarLink to="about" />
          <NavbarLink to="we offer" />
          <NavbarLink to="portfolio" />
          <NavbarLink to="recent work" />
          <NavbarLink to="contact" />
        </RightAlign>
        <Hamburger />
      </ContainerComponent>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav<{ bgColor: string }>`
  background: ${props => props.bgColor};
  height: var(--top-margin);
  position: fixed;
  transition: .4s;
  transition-delay: 1s;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 100;
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

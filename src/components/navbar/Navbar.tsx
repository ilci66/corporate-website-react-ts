import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Hamburger from './Hamburger'
import Logo from './Logo'
import NavbarLink from './NavbarLink'

const Navbar = (props:any) => {

  useEffect(() => {
    const nav:HTMLElement = document.querySelector("#navbar")!;
    
    console.log("asd", props.bgColor)
    
    nav.style.background = props.bgColor

  }, [props.bgColor]);


  return (
    <Nav id="navbar">
      <ContainerComponent>
        <Logo />
        <RightAlign>
          <NavbarLink to="about" />
          <NavbarLink to="we offer" />
          <NavbarLink to="portfolio" />
          <NavbarLink to="recent work" />
          <NavbarLink to="portfolio" />
          <NavbarLink to="contact" />
        </RightAlign>
        <Hamburger />
      </ContainerComponent>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav<any>`
  background: ${props => props.bgColor};
  height: var(--top-margin);
  position: fixed;
  transition: 0.7s;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 2;
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

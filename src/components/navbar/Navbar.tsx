import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Hamburger from './Hamburger'
import Logo from './Logo'
import NavbarLink from './NavbarLink'

const Navbar = (props:any) => {

  useEffect(() => {
    const nav:HTMLElement = document.querySelector("#navbar")!;
    
    // if(props.onScreen) nav.classList.add("red");
    // else if(props.onScreen) nav.classList.remove("white");
    
    console.log("asd", props.bgColor)
  
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

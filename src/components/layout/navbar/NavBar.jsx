import React from 'react'
import styled from 'styled-components'
import Hamburger from '../hamburger/Hamburger'

const NavBar = ({children}) => {;


  return (
    <StyledNav>
      <Hamburger language={""} />
      <RightAlignSection>
        
      </RightAlignSection>
    </StyledNav>
  )
}
export default NavBar

const StyledNav = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid var(--footer-grey);
  @media (max-width: 1200px) {
    padding: 0px 30px;
  }
  @media (max-width: 960px) {
    padding: 0px 10px;
  }
  padding: 0px 70px; 
`;


const RightAlignSection = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 961px) {
    display: none;
  }
  @media (max-width: 1200px) {
    padding: 20px 0px;
  }
  @media (max-width: 960px) {
    padding: 20px 0px;
  }
  padding: 20px 0px; 
`;

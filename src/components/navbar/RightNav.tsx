import React from 'react'
import styled from 'styled-components'
import RightNavbarLink from './RightNavbarLink';

interface propType {
  open:boolean
}

const RightNav = ( props: propType) => {
  return (
    <RightBarWrapper open={props.open}>
      <LinkContainer>
        <RightNavbarLink to="about" />
        <RightNavbarLink to="we offer" />
        <RightNavbarLink to="portfolio" />
        <RightNavbarLink to="recent work" />
        <RightNavbarLink to="contact" />
      </LinkContainer>
    </RightBarWrapper>
  )
}

export default RightNav

const RightBarWrapper = styled.div<{open:boolean}>`
  position: fixed;
  display: flex;
  border-left: 4px solid var(--baby-blue-eyes);
  justify-items: center;
  transition: all 0.3s ease-in-out;
  background: var(--white);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  z-index:10;
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

const LinkContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
`
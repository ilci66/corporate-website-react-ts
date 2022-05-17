import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from '../rightnav/RightNav'

const Hamburger = ({language}) => {

  const [open, setOpen] = useState(false)

  return (<>
    <StyledHamburger open={open} onClick={() => {setOpen(!open)}}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
    <RightNav open={open} language={language} />
  </>)
}

export default Hamburger 

const StyledHamburger = styled.div`
  position: ${({ open }) => open ? "fixed" : 'absolute'};
  right: 20px;
  width: 40px;
  z-index: 20;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 961px) {
    display: none;
  }

  div {
    width: 40px;
    height: 0.25rem;
    background-color: ${({ open }) => open ? "var(--orange-1)" : 'var(--text-color-dark)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

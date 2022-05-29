import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const Hamburger = () => {

  const [open, setOpen] = useState<boolean>(false)

  return (<>
    <StyledHamburger open={open} onClick={() => {setOpen(!open)}}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
    <RightNav open={open} />
  </>)
}

export default Hamburger;

const StyledHamburger = styled.div<{ open: boolean }>`
  position: ${({ open }) => open ? "fixed" : 'absolute'};
  top: 20px;
  right: 50px;
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
  @media screen and (min-width: 1201px) {
    display: none;
  }
  div {
    width: 40px;
    height: 0.25rem;
    background-color: ${({ open }) => open ? "var(--nadeshiko-pink)" : 'var(--baby-blue-eyes)'};
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
import React from 'react'
import styled from 'styled-components'

interface PropType {
  to: string;
}

const NavbarLink = ({ to }: PropType) => {
  const link = to.replace(' ', '-')
  return (
    <A href={`#${link}`}>{to}</A>
  )
}

export default NavbarLink

const A = styled.a`
  text-decoration: none;
  color: var(--baby-blue-eyes);
  font-size: 1.6rem;
  margin: 10px;
  text-transform: uppercase;
  transition: 0.4s;
  :hover {
    color: var(--nadeshiko-pink);
  }
`
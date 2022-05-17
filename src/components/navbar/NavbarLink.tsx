import React from 'react'
import styled from 'styled-components'

type propType = {
  to: string;
}

const NavbarLink = ({ to }: propType) => {
  return (
    <A href={`#${to}`}>{to}</A>
  )
}

export default NavbarLink

const A = styled.a`
  text-decoration: none;
  margin: 10px;
  text-transform: uppercase;
`
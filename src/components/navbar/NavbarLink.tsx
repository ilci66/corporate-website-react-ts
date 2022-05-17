import React from 'react'
import styled from 'styled-components'

type propType = {
  to: string;
}

const NavbarLink = ({ to }: propType) => {
  const link = to.replace(' ', '-')
  return (
    <A href={`#${link}`}>{to}</A>
  )
}

export default NavbarLink

const A = styled.a`
  text-decoration: none;
  margin: 10px;
  text-transform: uppercase;
`
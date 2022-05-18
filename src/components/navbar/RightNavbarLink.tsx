import React from 'react'
import styled from 'styled-components';

type propType = {
    to: string;
}


const RightNavbarLink = ({ to }: propType) => {
  const link = to.replace(' ', '-')

  return (
    <A href={`#${link}`}>{to}</A>
  )
}

export default RightNavbarLink

const A = styled.a`
  color: var(--yellow);
  text-decoration: none;
  text-transform: uppercase;
  transform: 1s;
  margin-bottom: 20px;
  font-size: 1.4rem;
  :hover {
    color: var(--white);
  }
`
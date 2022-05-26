/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/marketing-co.png';

const Logo = () => {
  return (
    <A href='#'>
      <Img src={logo} alt="brand logo" />
    </A>
  )
}

export default Logo

const A = styled.a`
  display: flex;
`
const Img = styled.img`
  border-radius: 50%;
  margin-top: 5px;
`
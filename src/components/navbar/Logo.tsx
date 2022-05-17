/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/marketing-co.png';

const Logo = () => {
  return (
    <A href='#'>
      <img src={logo} alt="brand logo" />
    </A>
  )
}

export default Logo

const A = styled.a`
  display: flex;
`
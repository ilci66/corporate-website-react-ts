import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/marketing-co.png';

const Logo = () => {
  return (
    <a href='/#'>
      <Img src={logo} alt="brand logo" />
    </a>
  )
}

export default Logo

const Img = styled.img`
  border-radius: 50%;
  margin: 5px;
  width: 94px;

`
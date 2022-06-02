import React from 'react'
import styled from 'styled-components';

interface propType {
  text: string,
  onClick?: Function,
}

const Button = (prop: propType) => {
  return (
    <StyledButton>
      {prop.text}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  padding: 14px 20px;
  font-size: 1.4rem;
  border-radius: 30px;
  border: 2px solid white;
  color: var(--white);
  background: linear-gradient(25deg, var(--uranian-blue), var(--nadeshiko-pink));
  
  text-transform: capitalize;
  transition: .4s;
  :hover {
    border: 2px solid black;
    background: inherit;
    cursor: pointer;
    color: var(--black);
  }
`
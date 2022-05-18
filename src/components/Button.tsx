import React from 'react'
import styled from 'styled-components';

type propType = {
  text: string
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
  color: black;
  background: white;

  text-transform: capitalize;
  transition: .4s;
  :hover {
    background: inherit;
    border: 2px solid black;

    cursor: pointer;
  }
`
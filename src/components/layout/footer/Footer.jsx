import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      Ayy this be da footah!
      <Divider></Divider>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  margin-top: auto;
  background: var(--footer-grey);
  color: var(--text-color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  
`
const A = styled.a`
  color: var(--text-color-light);
  font-size: 1.4rem;
  transition: .3s;
  margin: 10px 10px 20px;
  &:hover{
    color: var(--orange-1);
  }
`
const Divider = styled.div`
  background: var(--text-color-light);
  width: 100%;
  height:1px;
`


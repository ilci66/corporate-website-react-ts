import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropType {
  children: ReactNode
  column: boolean 
}

const ContainerComponent = (props:PropType ) => {
  return (
    <Container column={props.column}>
      {props.children}
    </Container>
  )
}

export default ContainerComponent;

const Container = styled.div<PropType>`
  display:flex;
  flex-direction: ${props => props.column ? "column": "row"};
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;  
  max-width: 1920px;

  @media (max-width: 1920px) {
    padding-left: 80px;
    padding-right: 80px;  
  }
  @media (max-width: 1440px) {
    padding-left: 60px;
    padding-right: 60px;  
  }
  @media (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;  
  }
  @media (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;  
  }
  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;  
  }
  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;  
  }
`
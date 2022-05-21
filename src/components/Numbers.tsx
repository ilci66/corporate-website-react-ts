import React from 'react'
import styled from 'styled-components'
import ContainerComponent from './ContainerComponent'

const Numbers = () => {
  return (
    <Wrapper>
      <ContainerComponent>     
        
      </ContainerComponent>
    </Wrapper>
  )
}

export default Numbers

const Wrapper = styled.div`
  margin-top: 160px;
  width: 100%;
  background: linear-gradient(0.25turn, var(--orchid-pink), var(--baby-blue-eyes));
  height: 300px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
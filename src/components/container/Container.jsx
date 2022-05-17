import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <ContentContainer>{children}</ContentContainer>
  )
}

export default Container

const ContentContainer = styled.section`
  margin-top: 30px;
  padding: 0 70px;
  @media (max-width: 1200px) {
    padding: 0 30px;
    margin-top: 20px;

  }
  @media (max-width: 960px) {
    padding: 0px 10px;
    margin-top: 10px;
  }
  @media (max-width: 960px) {
    margin-top: 50px;
  }
`
import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContainerComponent from '../ContainerComponent'
import Map from './MapComponent'

const Contact = () => {
  return (
    <ContainerComponent>
      <Wrapper id='contact'>
        <Map />
        <ContactForm />
      </Wrapper>
    </ContainerComponent>
  )
}

export default Contact

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 600px;
  grid-gap: 40px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`
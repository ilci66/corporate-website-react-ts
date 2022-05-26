import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import Contact from './Contact';
import Newsletter from './Newsletter';
import FooterBottomComponent from './FooterBottom';

const Footer = () => {

  return (
    <Wrapper>
      <ContainerComponent column={true}>
        <ContactNewsletter>
          <Contact />
          <Newsletter />
        </ContactNewsletter>
        <FooterBottomComponent />
      </ContainerComponent>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.section`
  width: 100%;
  background: var(--gray);
  margin-top: 40px;
  color: var(--gray-2);
  @media (max-width: 960px){
    padding-bottom: 40px;
  }
`
const ContactNewsletter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10vw;
  width: 100%;
  @media (max-width: 960px){
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
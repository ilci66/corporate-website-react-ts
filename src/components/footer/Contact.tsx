import React from 'react'
import styled from 'styled-components'

const ContactComponent = () => {
  return (
    <Contact>
      <H3>Let's talk!</H3>
      <Text>Feel free to contact us 24/7. We can discuss an ongoing project or start talking about a new one. You will be a ble to reach an employee whenever you call.</Text>
      <Number>0555-5555-555555-555</Number>
      <Number>0555-5555-555555-554</Number>
  </Contact>
  )
}

export default ContactComponent

const Contact = styled.div`
  padding: 100px 0px 120px;
  @media (max-width: 960px){
    padding: 40px 0 0 0 ;
  }
`
const H3 = styled.h3`
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 40px;
`
const Text = styled.p`
  margin-bottom: 20px;
`
const Number = styled.p`
  color: var(--baby-blue-eyes);
  font-size: 1.4rem;
`
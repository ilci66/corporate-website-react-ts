import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button';
import ContainerComponent from './ContainerComponent'

const Footer = () => {

  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent email is ==> ",email)
  }

  return (
    <Wrapper>
      <ContainerComponent>
        <ContactNewsletter>
          <Contact>
            <H3>Let's talk!</H3>
            <Text>Feel free to contact us 24/7. We can discuss an ongoing project or start talking about a new one. You will be a ble to reach an employee whenever you call.</Text>
            <Number>0555-5555-555555-555</Number>
            <Number>0555-5555-555555-554</Number>
          </Contact>
          <Newsletter>
            <H3>Sign up to our newsletter.</H3>
            If you wanna find out the latest tips and tricks we think that can help your business grow, sign up to our newsletter. You can subscribe easily if you don't like our weekly emails, no worries.
            <form onSubmit={e => handleSubmit(e)}>
              <label htmlFor="">
                <input 
                  type="email" 
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <Button text='Sign Up'/>
            </form>
          </Newsletter>
        </ContactNewsletter>

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
`
const H3 = styled.h3`
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 40px;
`
const Text = styled.p`
  margin-bottom: 30px;
`
const Number = styled.p`
  color: var(--baby-blue-eyes);
  font-size: 1.4rem;
`
const ContactNewsletter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10vw;
  width: 100%;
  
`

const Contact = styled.div`
  padding: 100px 0px 120px;
`

const Newsletter = styled.div`
padding: 100px 0px 120px;

`
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button';
import ContainerComponent from './ContainerComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent email is ==> ",email)
  }

  return (
    <Wrapper>
      <ContainerComponent column={true}>
        <ContactNewsletter>
          <Contact>
            <H3>Let's talk!</H3>
            <Text>Feel free to contact us 24/7. We can discuss an ongoing project or start talking about a new one. You will be a ble to reach an employee whenever you call.</Text>
            <Number>0555-5555-555555-555</Number>
            <Number>0555-5555-555555-554</Number>
          </Contact>
          <Newsletter>
            <H3>Sign up to our newsletter.</H3>
            <Text>If you wanna find out the latest tips and tricks we think that can help your business grow, sign up to our newsletter. You can subscribe easily if you don't like our weekly emails, no worries.</Text>
            <Form onSubmit={e => handleSubmit(e)}>
              <label htmlFor="">
                <Input 
                  type="email" 
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <Button text='Sign Up'/>
            </Form>
          </Newsletter>
        </ContactNewsletter>
        <FooterBottom>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </Icon>
          </Icons>
          <Text>You can find the full code <A href='#'>here</A> and the blog post <A href='#'>here</A>. Ilker AKBIYIK</Text>
        </FooterBottom>
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
  margin-bottom: 20px;
  margin-left: auto;
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
  width: 100%;
`
const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 8px;
  font-size: 1.4rem;
  transition: 0.4s;
  :focus {
    box-shadow: 0px 0px 32px var(--baby-blue-eyes);
  }
`

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  grid-column: span 2;
  align-items:center;
`
const A = styled.a`
  color: var(--baby-blue-eyes);
  text-decoration: none;
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
`
const Icon = styled.div`
  background: var(--gray-2);
  font-size: 2.4rem;
  margin: 10px;
  padding: 10px 20px;
  color: var(--white);
  transition: 0.4s;
  :hover {
    background: var(--white);
    color: var(--baby-blue-eyes);
  }
`
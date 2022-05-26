import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../Button';

const NewsletterComponent = () => {

  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent email is ==> ",email)
  }

  return (
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
  )
}

export default NewsletterComponent;

const H3 = styled.h3`
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 40px;
`
const Text = styled.p`
  margin-bottom: 20px;
  margin-left: auto;
`

const Newsletter = styled.div`
  padding: 100px 0px 120px;
  width: 100%;
  @media (max-width: 960px){
    padding: 0 ;
  }
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

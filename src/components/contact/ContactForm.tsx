import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("the info to send", name, email, subject, text)
  }

  return (
    <Wrapper>
      <H3>Feel free to contact us!</H3>
      <P>We will respond to you as soon as we can</P>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Label htmlFor="f-name">
          Enter your name
          <Input 
            required 
            type="text" 
            name="f-name" 
            placeholder='John Doe'
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label htmlFor="f-email">
          Enter your email address
          <Input 
            type="email" 
            name="f-email" 
            required
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label htmlFor="f-subject">
          Enter a subject
          <Input 
            type="text" 
            name="f-subject" 
            required
            placeholder='Marketing campaign'
            onChange={(e) => setSubject(e.target.value)}
          />
        </Label>
        <Label htmlFor="f-textarea">
          What would you like to share with us
        </Label>
          <Textarea 
            required
            rows={12}
            onChange={(e) => setText(e.target.value)}
          />
        <Button text='submit'/>
      </Form>
    </Wrapper>
  )
}

export default ContactForm

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
const H3 = styled.h3`
  font-size: 1.8rem;
`
const P = styled.p`
  color: var(--gray-2);
`

const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: .8rem;
  margin-top: 14px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1.4rem;
  transition: 0.4s;
  :focus {
    box-shadow: 0px 0px 32px var(--baby-blue-eyes);
  }
`
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  transition: 0.4s;
  :focus {
    box-shadow: 0px 0px 32px var(--baby-blue-eyes);
  }
  margin-bottom: 10px;
`

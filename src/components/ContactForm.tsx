import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  return (
    <Wrapper>
      <h3>Feel free to contact us!</h3>
      <p>We will respond to you as soon as we can</p>
      <form>
        <label htmlFor="">
          <input type="text" />
        </label>
      </form>
    </Wrapper>
  )
}

export default ContactForm

const Wrapper = styled.div`
  width: 100%;
  * {
  
  }
`

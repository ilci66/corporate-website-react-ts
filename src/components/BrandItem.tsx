import React from 'react'
import styled from 'styled-components'

type propTypes = {
  img: string
  text: string
}
  
type styleProp = {
  img: string
}

const BrandItem = (props:propTypes) => {
  return (
    <Wrapper>
      <Img src={props.img} alt="" />
      <P>{props.text}</P>
    </Wrapper>
  )
}

export default BrandItem

const Wrapper = styled.div`
  transition: 0.4s;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  :hover {
    box-shadow: 0px 0px 32px var(--nadeshiko-pink);
  }
`
const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`

const P = styled.p`
  margin-bottom: 20px;
`
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
      {/* <P>{props.text}</P> */}
    </Wrapper>
  )
}

export default BrandItem

const Wrapper = styled.div`
padding: 10px;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;

`
const Img = styled.img`
  width: 100%;
  transition: 0.4s;
  max-width: 160px;
  border-radius: 5px;
  :hover {
    box-shadow: 0px 0px 32px var(--nadeshiko-pink);
  }
`

const P = styled.p`
  margin-bottom: 20px;
`
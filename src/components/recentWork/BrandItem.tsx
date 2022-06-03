import React from 'react'
import styled from 'styled-components'

interface PropTypes {
  img: string
}

const BrandItem = (props:PropTypes) => {
  return (
    <Wrapper>
      <Img src={props.img} alt="" />
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
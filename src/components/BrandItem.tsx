import React from 'react'
import styled from 'styled-components'

type propTypes = {
    img: string
    text: string
  }
  
const BrandItem = (props:propTypes) => {
  return (
    <Wrapper>{props.text}</Wrapper>
  )
}

export default BrandItem

const Wrapper = styled.div`
  background: var(--baby-blue-eyes);
`
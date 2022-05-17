import React from 'react'
import styled from 'styled-components'

const hamburger = () => {
  return (
    <HamburgerWrapper>
      hamburger
    </HamburgerWrapper>
  )
}

export default hamburger

const HamburgerWrapper = styled.div`
  display: block;
  @media (min-width: 960px) {
    display: none;
  }
`
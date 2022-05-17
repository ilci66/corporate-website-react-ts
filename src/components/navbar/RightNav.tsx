import React from 'react'
import styled from 'styled-components'

type propType = {
  open:boolean
}

const RightNav = ( props: propType) => {
  return (
    <RightBarWrapper open={props.open}>
      RignNav
    </RightBarWrapper>
  )
}

export default RightNav

const RightBarWrapper = styled.div<{open:boolean}>`
  position: fixed;
  transition: all 0.3s ease-in-out;
  background: var(--darker-blue);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  z-index:10;
  @media screen and (min-width: 961px) {
    display: none;
  }
`
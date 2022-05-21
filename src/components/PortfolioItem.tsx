import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type propTypes = {
  imgSrc: string
  alt: string
  colSpan: string
  link: string
}

type styleProp = {
  colSpan: string
}

const PortfolioItem = (props:propTypes) => {
  return (
    <Wrapper colSpan={props.colSpan}>
      <A href={props.link}>
        <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
      </A>
      <Img src={props.imgSrc} alt={props.alt} />
    </Wrapper>
  )
}

export default PortfolioItem

const A = styled.a`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
`
const Img = styled.img`  
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div<styleProp>`
  grid-columns: ${props => props.colSpan.toString()};
  :hover {
    ${A} {
      opacity: 0.7;
    }
  }
`

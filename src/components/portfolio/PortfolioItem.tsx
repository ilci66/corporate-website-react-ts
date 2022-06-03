import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface propTypes {
  imgSrc: string
  alt: string
  colSpan: string
  link: string
}

interface styleProp {
  colSpan: string
}

const PortfolioItem = (props:propTypes) => {
  return (
    <Wrapper colSpan={props.colSpan}>
      <A href={props.link}>
        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
      </A>
      <Img loading='lazy' src={props.imgSrc} alt={props.alt} />
    </Wrapper>
  )
}

export default PortfolioItem

const A = styled.a`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  background: rgba(255,255,255);
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 2rem;
`
const Img = styled.img`  
  width: 100%;
  height: 340px;
  object-fit: cover;
`
const Wrapper = styled.div<styleProp>`
  position: relative;
  grid-column: span ${props => props.colSpan};
  @media (max-width: 600px){
    grid-column: 1/-1;
  }
  :hover {
    ${A} {
      opacity: 0.7;
    }
  }
`

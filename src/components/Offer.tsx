import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faRocket, faBook, faCode, faLaptop, faGamepad, faUser, faRobot, faGift } from '@fortawesome/free-solid-svg-icons';
import {  faHandRock, } from '@fortawesome/free-regular-svg-icons';


const Offer = () => {
  return (
    <OfferWrapper>
      <Content>
        <OfferTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </OfferTitle>
        <div>
          <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
          <h3>we are fast</h3>
        </div>
        <div>
        <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
        <h3>lots of promotions</h3>
        </div>
        <div>
          <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
          <h3>expert developers</h3>
        </div>
        <div>
        <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
        <h3>automize your growth</h3>

        </div>
      </Content>
    </OfferWrapper>
  )
}

export default Offer

const OfferWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
`

const Content  = styled.div`
  display: grid;
  grid-template-columns: repeat(4 ,1fr );
`

const OfferTitle = styled.h2`
 grid-column: span 4;
`
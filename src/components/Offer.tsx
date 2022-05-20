import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,  faCode, faRobot, faGift } from '@fortawesome/free-solid-svg-icons';
// import {  faHandRock, } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';
import OfferDetalis from './OfferDetalis';


const Offer = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => console.log("open?" , open),[open] )
  
  return (
    
    <OfferWrapper >
      <Content>
        <OfferHeader>
          <OfferTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </OfferTitle>
          <p>Corporis modi optio, dolorum fugiat magni</p>
        </OfferHeader>

        <div>
          <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
          <h3>We Are Fast</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam voluptas obcaecati nulla, maiores magnam.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
          <h3>Expert Developers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
          <h3>Lots of Promotions</h3>
          <p>quod ipsa voluptates, nesciunt illo laboriosam totam neque sequi, vel provident impedit atque soluta? Doloribus, ipsum.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
          <h3>Automize Your Growth</h3>
          <p>quod ipsa voluptates, nesciunt illo laboriosam totam neque sequi, vel provident.</p>
        </div>
        <Button onClick={() => setOpen(true)} text={"More"} />
      </Content>
      <OfferDetalis open={open} setOpen={setOpen} />
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
  grid-gap: 50px;
`

const OfferHeader = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-bottom: 60px;
`
const OfferTitle = styled.h2`
  font-size: 1.8rem;
`

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,  faCode, faRobot, faGift } from '@fortawesome/free-solid-svg-icons';
// import {  faHandRock, } from '@fortawesome/free-regular-svg-icons';
// import OfferDetails from './OfferDetails';


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
          <OfferSubTitle>Corporis modi optio, dolorum fugiat magni</OfferSubTitle>
        </OfferHeader>

        <OfferBox>
          <DetailInfo>
            <DetailText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi assumenda deserunt ullam perspiciatis modi libero inventore earum voluptas iure?
            </DetailText>
          </DetailInfo>

          <OfferInfo>
            <IconSpan>
              <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
            </IconSpan>
            <BoxTitle>We Are Fast</BoxTitle>
            <BoxText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam voluptas obcaecati nulla, maiores magnam.</BoxText>
          </OfferInfo>
        </OfferBox>

        <OfferBox onClick={() => setOpen(true)}>
        <DetailInfo>
          <DetailText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda aspernatur dignissimos, incidunt quas fugiat.
          </DetailText>
        </DetailInfo>

          <OfferInfo>
            <IconSpan>
              <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            </IconSpan>
            <BoxTitle>Expert Developers</BoxTitle>
            <BoxText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia </BoxText>
          </OfferInfo>  
        </OfferBox>

        <OfferBox onClick={() => setOpen(true)}>
          <DetailInfo>
            <DetailText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda aspernatur dignissimos, incidunt quas fugiat.
            </DetailText>
          </DetailInfo>
          
          <OfferInfo>
            <IconSpan>
              <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
            </IconSpan>
            <BoxTitle>Lots of Promotions</BoxTitle>
            <BoxText>quod ipsa voluptates, nesciunt illo laboriosam totam neque sequi, vel provident impedit atque soluta? Doloribus, ipsum.</BoxText>
          </OfferInfo>
        </OfferBox>

        <OfferBox onClick={() =>setOpen(true)}>
          <DetailInfo>
              <DetailText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda aspernatur dignissimos, incidunt quas fugiat.
              </DetailText>
          </DetailInfo>

          <OfferInfo>
            <IconSpan>
              <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
            </IconSpan>
            <BoxTitle>Automize Your Growth</BoxTitle>
            <BoxText>quod ipsa voluptates, nesciunt illo laboriosam totam neque sequi, vel provident.</BoxText>
          </OfferInfo>
        </OfferBox>
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
  grid-gap: 30px;
`

const OfferHeader = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-bottom: 60px;
`
const OfferTitle = styled.h2`
  font-size: 1.8rem;
`
const OfferSubTitle = styled.p`
  margin-top:20px;
`
const DetailInfo = styled.div`
  width: 100%;
  height: 0%;
  transition: 1s;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const DetailText = styled.p`
  margin-bottom: 20px;
  line-height: 1.7;
  text-align: center;
`

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OfferBox = styled.div`
  transition : 0.4s;  
  cursor: pointer;
  border-radius: 10px;
  :hover{
      box-shadow:0 0 30px var(--nadeshiko-pink);
      ${DetailInfo} {
        height: 100%;
        opacity: 1;
      }
      ${OfferInfo} {
        transform: scale(0);
      }
    }
  padding: 40px 20px;
`
const IconSpan = styled.span`
  font-size: 2.4rem;
  color: var(--baby-blue-eyes);
`
const BoxTitle = styled.h3`
  margin-bottom: 26px;
`
const BoxText = styled.p`
  line-height: 1.6;
  font-size: 1.07rem;
`

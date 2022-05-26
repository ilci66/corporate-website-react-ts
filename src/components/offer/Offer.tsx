import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OfferBottom from './OfferBottom';
import data from '../../data/offerData';


const Offer = () => {
  
  return (
    <>
    <OfferWrapper id='we-offer'>
      <Content>
        <OfferHeader>
          <OfferTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </OfferTitle>
          <OfferSubTitle>Corporis modi optio, dolorum fugiat magni</OfferSubTitle>
        </OfferHeader>

        {data.map(d => <OfferBox key={d.title}>
          <DetailInfo>
            <DetailText>{d.detail}</DetailText>
          </DetailInfo>
          <OfferInfo>
            <IconSpan>
              <FontAwesomeIcon icon={d.icon}></FontAwesomeIcon>
            </IconSpan>
            <BoxTitle>{d.title}</BoxTitle>
            <BoxText>{d.text}</BoxText>
          </OfferInfo>
        </OfferBox>)}
        
      </Content>
    </OfferWrapper>
    <OfferBottom />
    </>
  )
}

export default Offer

const OfferWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  @media (max-width: 1200px) {
    padding:60px;
  }
  @media (max-width: 960px) {
    padding: 40px;
  }
  @media (max-width: 720px) {
    padding:20px;
  }
`

const Content  = styled.div`
  display: grid;
  grid-template-columns: repeat(4 ,1fr );
  grid-gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-gap: 6px;
  }
`

const OfferHeader = styled.div`
  grid-column: 1/-1;
  text-align: center;
  margin-bottom: 60px;
`
const OfferTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 50px;
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
  @media (max-width: 1200px) {
    padding: 30px 16px;
  }
  @media (max-width: 720px) {
    padding: 12px 10;
  }
`
const IconSpan = styled.span`
  font-size: 2.4rem;
  color: var(--baby-blue-eyes);
`
const BoxTitle = styled.h3`
  margin-bottom: 26px;
  width: 100%;
`
const BoxText = styled.p`
  line-height: 1.6;
  font-size: 1.07rem;
`

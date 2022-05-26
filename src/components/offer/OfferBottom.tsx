import React from 'react'
import styled from 'styled-components'
import call from '../../assets/callcenter-employees.jpg';
import meeting from '../../assets/office-people.jpg';

const OfferBottom = () => {
  return (
    <Wrapper>
      <Img src={call} alt="Call center team" />
      
      <InfoBox>
        <AboveTitle>
          CONTACT US
        </AboveTitle>
        <InfoTitle>
          WE ARE READY TO HELP 24/7
        </InfoTitle>
        <InfoText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis excepturi quia magnam dolores laudantium reiciendis eveniet, ab accusamus sequi?
        </InfoText>
      </InfoBox>

      <Img src={meeting} alt="a typical team meeting" />
      
      <InfoBox>
        <AboveTitle>
          SIMPLE SOLUTIONS FOR COMPLEX PROBLEMS
        </AboveTitle>
        <InfoTitle>
          NO MATTER HOW DIFFICULT THE TASK 
        </InfoTitle>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates sed culpa ratione sapiente mollitia.
        </InfoText>
      </InfoBox>
    </Wrapper>
  )
}

export default OfferBottom

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px; 
  background: var(--black);
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const Img = styled.img`
  height:100%;
  width:100%;
  object-fit: cover;
`
const InfoBox = styled.div`
  padding: 20px 40px;
`
const InfoTitle = styled.h3`
  color: var(--baby-blue-eyes);
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 2rem;
`

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--gray-2);
`

const AboveTitle = styled.p`
  color: var(--gray-2);
  margin-top: 10px;
`
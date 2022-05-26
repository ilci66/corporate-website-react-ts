import React from 'react'
import styled from 'styled-components'
import cactusImg from '../assets/yellow-cactus-white-bg.jpg';



const About = (props:any) => {
  return (
    <AboutWrapper id="about">
      <Img>
      </Img>
      <TextBox>
        <TextBoxTitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias
        </TextBoxTitle>
        <TextBoxTitleText>
          Odio labore sequi consequatur ipsa cupiditate pariatur ducimus itaque consequuntur nulla nostrum!cupiditate pariatur ducimus itaque consequuntur nulla nostrum!
        </TextBoxTitleText>
        <div>
          <InfoBoxTitle>
            Some Title
          </InfoBoxTitle>
          <InfoText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic ipsa numquam quos ullam quo eum? Sit a dicta assumenda est doloremque unde eius consequuntur sint vero, dolorem non illo?</InfoText>  
        </div>
        <div>
          <InfoBoxTitle>
            Another Title
          </InfoBoxTitle>
          <InfoText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae neque cupiditate consequuntur perferendis laboriosam mollitia vitae ipsum expedita. </InfoText>
        </div>

      </TextBox>
    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
const Img = styled.div`
  background-image: url(${cactusImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: var(--top-margin);
  padding-bottom: var(--top-margin);
  @media (max-width: 1200px) {
    height: 500px;
  }
  @media (max-width: 960px) {
    height: 400px;
  }
  @media (max-width: 720px) {
    height: 300px;
  }
`

const TextBox = styled.div`
  padding: 100px 140px 140px 20px;
  background: #ebebf5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px; 
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 960px) {
    padding: 60px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`
const TextBoxTitle = styled.h2`
  grid-column: span 2;
  margin-bottom: 20px;
  color: var(--darker-blue);
  font-size: 1.8rem;
`

const InfoBoxTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 14px;
`

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.2;
`
const TextBoxTitleText = styled.p`
  grid-column: span 2; 
  font-size: 1.1rem;
  line-height: 1.2;
`
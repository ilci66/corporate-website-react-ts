import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/office-designers.jpg';
import Button from './Button';
import ContainerComponent from './ContainerComponent';



const Banner = (props: any) => {
  return (
    <BannerWrapper>
      <ContainerComponent column={true}>
      <BannerContent>
        <H1>YOU BRAND WILL GROW HERE</H1>
        <H2>Lorem ipsum, dolor sit</H2>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia voluptatum minus deserunt delectus ipsum cupiditate. Unde, repudiandae molestiae? Mollitia temporibus unde beatae. Odio quod, accusamus dicta fugiat molestiae recusandae?</P>
        <a style={{marginTop: "-50px"}} href="#about"><Button text={"discover"}/></a>
      </BannerContent>
      </ContainerComponent>
    </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled.section`
  background:  linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7) ), url(${bgImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding-top: var(--top-margin);
  margin-top: 0;
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  margin-top: var(--top-margin);
`

const H1 = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
`
const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: var(--baby-blue-eyes);
  @media (max-width: 1440px) {
    font-size: 2.6rem;
  }
  @media (max-width: 1200px) {
    font-size: 2.3rem;
  }
`
const P = styled.p`
  text-align: center;
  max-width: 500px;
  font-size: 1.2rem;
  margin-bottom: 100px;
  line-height: 1.7;
`
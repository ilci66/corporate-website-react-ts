import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/office-designers.jpg';
import Button from './Button';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <H1>YOU BRAND WILL GROW HERE</H1>
        <H2>Lorem ipsum, dolor sit</H2>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia voluptatum minus deserunt delectus ipsum cupiditate. Unde, repudiandae molestiae? Mollitia temporibus unde beatae. Odio quod, accusamus dicta fugiat molestiae recusandae?</P>
        <Button text={"discover"}/>
      </BannerContent>
    </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled.section`
  background:  linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  
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
`

const H1 = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
`
const H2 = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
`
const P = styled.p`
  text-align: center;
  max-width: 500px;
  font-size: 1.4rem;
  margin-bottom: 100px;
`
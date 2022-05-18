import React from 'react'
import styled from 'styled-components'
import cactusImg from '../assets/yellow-cactus-white-bg.jpg';

const About = () => {
  return (<>
    <AboutWrapper>
    </AboutWrapper>
      About
  </>)
}

export default About

const AboutWrapper = styled.section`
  background-image: url(${cactusImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: var(--top-margin);
`
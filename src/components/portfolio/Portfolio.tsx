import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import data from '../../data/portfolioData';
import PortfolioItem from './PortfolioItem';
import Numbers from './Numbers';


const Portfolio = () => {
  return (
    <Wrapper id='portfolio'>
      <ContainerComponent column={true}>
        <H2>Some of The Companies That Love Our Solutions</H2>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitle>
        <Grid>
          {data.map(d => {
            return <PortfolioItem key={d.img} imgSrc={d.img} alt={d.alt} colSpan={d.cols} link={d.link}/>
          })}
        </Grid>
      </ContainerComponent>
      <Numbers />
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.section`
`

const H2 = styled.h2`
  margin-top: 160px;
  text-align: center;
  width: 100%;
  font-size: 2.4rem;
  @media (max-width: 1200px){
    margin-top: 100px;
  }
  @media (max-width: 960px){
    margin-top: 80px;
  }
`
const SubTitle = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 80px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  grid-auto-flow: dense;
  align-items: center;
  @media (max-width: 600px){
    grid-template-columns: 1fr;
  }
`

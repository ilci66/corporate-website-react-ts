import React from 'react'
import styled from 'styled-components'
import ContainerComponent from './ContainerComponent'
import data from '../data/portfolioData';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <Wrapper>
      <C>
        <H2>SOME OF THE COMPANIES THAT LOVE OUR SOLUTIONS</H2>
        <Grid>
          {data.map(d => {
            return <PortfolioItem imgSrc={d.img} alt={d.alt} colSpan={d.cols} link={d.link}/>
          })}
        </Grid>
      </C>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.section`
`
const C = styled(ContainerComponent)`
  background: green;
`

const H2 = styled.h2`
  test-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
`

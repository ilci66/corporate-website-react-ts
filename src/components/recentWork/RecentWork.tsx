import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import data from '../../data/recentWorkCardData'
import RecentWorkCard from './RecentWorkCard'
import Brands from './Brands'


const RecentWork = () => {
  return (
    <Wrapper id='recent-work'>
      <ContainerComponent column={true}>
        <H2>Our most recent publications</H2>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quas maxime a doloremque esse.</SubTitle>
        <RecentWorkGrid>
          {data.map(d => <RecentWorkCard key={d.title} title={d.title} text={d.text} name={d.name} avatar={d.avatar} />)}
        </RecentWorkGrid>
        <Brands />
      </ContainerComponent>
    </Wrapper>
  )
}

export default RecentWork

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 60px;
  margin-top: 120px;  
`
const H2 = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  font-weight: thin;
`
const SubTitle = styled.p`
  margin-top: 6px;
  text-align: center;
  font-size: 1.2rem;
  color: var(--gray-2);
`

const RecentWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  width: 100%;
  margin: auto;
  margin-top: 60px;
  @media (max-width: 960px){
    grid-template-columns: 1fr;
  }
`
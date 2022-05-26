import React from 'react'
import styled from 'styled-components'
import ContainerComponent from '../ContainerComponent'
import data from '../../data/numbersData'
import NumbersItem from './NumbersItem'
import { useInView } from 'react-intersection-observer'

const Numbers = () => {
  
  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 1,
  });


  return (
    <Wrapper>
      <ContainerComponent>     
        <Grid ref={ref}>
          {data.map(d => {
            return <NumbersItem key={d.num} inView={inView} num={d.num} text={d.text}/>
          })}  
        </Grid>
      </ContainerComponent>
    </Wrapper>
  )
}

export default Numbers

const Wrapper = styled.div`
  margin-top: 160px;
  margin-bottom: 40px;
  width: 100%;
  background: linear-gradient(0.25turn, var(--orchid-pink), var(--baby-blue-eyes));
  min-height: 300px;
  display: flex;
  aşign-items: center;
  `
  const Grid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  @media (max-width: 1200px) {
    grid-gap: 20px
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
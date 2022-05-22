import React from 'react'
import styled from 'styled-components'
import ContainerComponent from './ContainerComponent'
import data from '../data/numbersData'
import NumbersItem from './NumbersItem'
import { useInView } from 'react-intersection-observer'

const Numbers = () => {
  
  const { ref, inView, entry } = useInView({
    rootMargin: "0px",
    threshold: 1,
  });


  return (
    <Wrapper>
          {/* <div ref={ref}></div> */}
    {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
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
  width: 100%;
  background: linear-gradient(0.25turn, var(--orchid-pink), var(--baby-blue-eyes));
  height: 300px;
  margin-bottom: 40px;
  `
  const Grid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
`
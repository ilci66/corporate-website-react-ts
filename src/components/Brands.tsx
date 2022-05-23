import React from 'react'
import styled from 'styled-components'
import data from '../data/brandData'
import BrandItem from './BrandItem'


const Brands = () => {
  return (
    <Wrapper>
      <H3>You may know some of our partners</H3>
      {data.map(d => <BrandItem img={d.img} text={d.text} />)}
    </Wrapper>
  )
}

export default Brands

const Wrapper = styled.div`
  margin-top: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 100px;
`
const H3 = styled.h3`
  grid-column: span 5;
  margin-bottom: -120px;
  font-size: 1.8rem;
  margin-left: 10px;
`
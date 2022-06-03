import React from 'react'
import styled from 'styled-components'
import data from '../../data/brandData'
import BrandItem from './BrandItem'


const Brands = () => {
  return (
    <Wrapper>
      <H3>You may know our partners</H3>
      {data.map(d => <BrandItem img={d.img} />)}
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
  
  @media (max-width: 1200px) {  
    grid-gap: 20px;
  }
  @media (max-width: 720px) {  
    grid-template-columns: repeat(3, 1fr);  
    grid-gap: 30px;
  }
  @media (max-width: 480px) {  
    grid-template-columns: 1fr 1fr;  
    grid-gap: 20px;
  }
`
const H3 = styled.h3`
  grid-column: 1/ -1;
  margin-bottom: 0;
  font-size: 1.8rem;
  margin-left: 10px;
`
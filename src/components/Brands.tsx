import React from 'react'
import styled from 'styled-components'
import data from '../data/brandData'
import BrandItem from './BrandItem'


const Brands = () => {
  return (
    <Wrapper>
      {data.map(d => <BrandItem img={d.img} text={d.text} />)}
    </Wrapper>
  )
}

export default Brands

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 60px;
`
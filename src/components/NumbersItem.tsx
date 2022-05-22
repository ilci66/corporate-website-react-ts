import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';



type Props = {
  num: string,
  text: string,
  inView: boolean
}

const NumbersItem = (props: Props) => {
  
  return (
    <Wrapper>
      <Num>{props.inView && <CountUp start={0} end={parseInt(props.num)} duration={2.5} />}</Num>
      <Text>{props.text}</Text>
    </Wrapper>
  )
}

export default NumbersItem

const Wrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Num = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
`

const Text = styled.p`
  font-size:1.4rem;
`
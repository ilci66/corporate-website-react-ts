import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';

type Props = {
  num: string,
  text: string,
  inView: boolean
}

const NumbersItem = (props: Props) => {
  const [ activated, setActivated ] = useState<boolean>(false);

  useEffect(() => { if(props.inView) setActivated(true) }, [props.inView])

  return (
    <Wrapper>
      <Num>{activated && <CountUp start={0} end={parseInt(props.num)} duration={2.5} />}</Num>
      <Text>{props.text}</Text>
    </Wrapper>
  )
}

export default NumbersItem

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 480px){
    align-items: center;
  }
`

const Num = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
`

const Text = styled.p`
  font-size:1.4rem;
`
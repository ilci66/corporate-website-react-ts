import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
  num: string,
  text: string,
  inView: boolean
}

const NumbersItem = (props: Props) => {
  
  // let interval: NodeJS.Timer;
  // let timeOut;
  const [ count, setCount ] = useState(0);
  // const [ startCount, setStartCount ] = useState(false);

  // const increment = () => { 
  //   setCount(count + 1); 
  //   if(count < parseInt(props.num)) setTimeout(() => increment, 10); clearTimeout(setTimeout(() => increment, 10));
  //   return;
  // };

  // useEffect(() => increment())

  return (
    <Wrapper>
      <Num>{count}</Num>
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
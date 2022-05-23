import React from 'react'
import styled from 'styled-components'
import lines from '../assets/lines-orange-white.jpg'

type propTypes = {
  title: string
  text: string
  name: string
  avatar: string
}

const RecentWorkCard = (props:propTypes) => {
  return (
    <Wrapper>
      <InfoBox>
        <H3>{props.title}</H3>
        <WriterP>{props.text}</WriterP>
      </InfoBox>
      <WriterBox>
        <Img src={props.avatar} alt="" />
        <p>{props.name}</p>
      </WriterBox>
    </Wrapper>
  )
}

export default RecentWorkCard

const InfoBox = styled.div`
  margin-bottom: 20px; 
  transition: 0.4s;
`

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 400px;
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${lines});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  :hover {
    cursor: pointer;
    ${InfoBox} {
      color: var(--baby-blue-eyes);
    }
  }
`


const WriterBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

const H3 = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
`
const WriterP = styled.p`
  margin-top: 6px;

`

const Img = styled.img`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
`
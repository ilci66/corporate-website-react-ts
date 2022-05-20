import React, { Dispatch, SetStateAction, FC } from 'react'
import styled from 'styled-components'

type propTypes = {
  open: Boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const OfferDetalis: FC<propTypes> = (props) => {
  return (

    <OfferDetalisWrapper >
      <button  onClick={() => props.setOpen(false)}></button>
      
    </OfferDetalisWrapper>
  )
}

export default OfferDetalis

const OfferDetalisWrapper = styled.div`
  transition: 0.3s;
  width: ${(props) => props.open ? "100%": "0%"};
  height: ${(props) => props.open ? '100%' : '0%'};
`

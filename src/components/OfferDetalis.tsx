import React, { Dispatch, SetStateAction, FC } from 'react'
import styled from 'styled-components'

type propTypes = {
  open: Boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const OfferDetalis: FC<propTypes> = ({open, setOpen}) => {
  return (
    
    <OfferDetalisWrapper open={open}>
      <button onClick={() => setOpen(false)}></button>
      
    </OfferDetalisWrapper>
  )
}

export default OfferDetalis

const OfferDetalisWrapper = styled.div`
  transition: 0.3s;
  width: ${({open}) => open ? "100%": "0%"};
  height: ${({ open }) => open ? '100%' : '0%'};
`

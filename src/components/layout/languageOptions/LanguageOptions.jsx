import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

  const LanguageOptions = ({language}) => {
  const toggleShow = () => {
    const languageSelectButton = document.querySelector('#lng-slct-btn');
    const optionsUl = document.querySelector('#opts-ul');
    console.log("opts con ==>",languageSelectButton)
    console.log("opts ul ==>",optionsUl)
    if(languageSelectButton.classList.contains('move-up') && optionsUl.classList.contains('show-opts-ul')){
      optionsUl.classList.remove('show-opts-ul')
      languageSelectButton.classList.remove('move-up');
    } else {
      optionsUl.classList.add('show-opts-ul')
      languageSelectButton.classList.add('move-up');
    }
  }

  return (<>
    <OptionsContainer id="opts-con">
      <LnSlctBtn id="lng-slct-btn" onClick={toggleShow}>{language==="tr"?"Tr":language==="fr"?"Fr":"En"}<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></LnSlctBtn>
      <OptionsUl id="opts-ul">
        <li><StyledLngLink to="/tr/" id="opt-tr">Tr</StyledLngLink></li>
        <li><StyledLngLink to="/fr/" id="opt-fr">Fr</StyledLngLink></li>
        <li><StyledLngLink to="/" id="opt-en">En</StyledLngLink></li>
      </OptionsUl>
    </OptionsContainer>
  </>)
}

export default LanguageOptions

const OptionsContainer = styled.div`
  // position: absolute;
  // top: 100px;
  display: grid;
  @media (max-width: 961px) {
    margin-right: 100px;
  }

`
const LnSlctBtn = styled.button`
  z-index: 2;
  padding: 5px 8px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius:15px;
  color: var(--text-color-dark);
  justify-items:center;
  font-size: .9rem;
  transition: 0.3s;
  background: none;
  border:none;
  border-radius: 15px;
  width: 80px;
  &:hover{
    cursor:pointer;
    opacity: 1;
    background: var(--text-color-dark);
    color: var(--text-color-light);
  }
  &.move-up{
    background: var(--text-color-dark);
    color: var(--text-color-light);
    transform: translateY(-20px);
  }
`

const OptionsUl = styled.ul`
  padding: 5px;
  z-index: 1;
  list-style: none;
  position: absolute;
  // display: none;
  transition-delay: 0.3s;
  transition: 0.3s;
  opacity: 0;
  display: flex;
  &.show-opts-ul{
    opacity: 1;
    transform: translate(-24px, 24px);
    
  }
`

const StyledLngLink = styled(Link)`
  color: var(--text-color-dark);
  text-decoration: none;
  margin: 0 4px;
`


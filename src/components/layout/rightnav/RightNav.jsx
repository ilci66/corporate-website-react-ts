import React, { useContext } from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faPortrait, faBook, faCode, faLaptop, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  GlobalStateContext,
} from '../../../context/GlobalContextProvider';

const RightNav = ({open}) => {
  const state = useContext(GlobalStateContext)

  let language = state.lang;
  return (
    <StyledRightNav open={open}>
      <RighNavLinks>
        <NavLi>
          <NavLink
            // to="/learning"
            to={language === "tr" ? "/tr/ogren" : language === "fr" ? "/fr/apprentissage" : "/learning" }
            activeStyle={{ color: "var(--orange-1)" }}
            partiallyActive={true}
          >
            {language === "tr" ? "Öğren" : language === "fr" ? "Apprentissage" : "Learning" } <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            // to="/tech"
            to={language === "tr" ? "/tr/teknoloji" : language === "fr" ? "/fr/technologie" : "/tech" }
            activeStyle={{ color: "var(--orange-1)" }}
            partiallyActive={true}
          >
            {language === "tr" ? "Teknoloji" : language === "fr" ? "Technologie" : "Tech" } <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            // to="/games"
            to={language === "tr" ? "/tr/oyunlar" : language === "fr" ? "/fr/jeux" : "/games" }
            activeStyle={{ color: "var(--orange-1)" }}
            partiallyActive={true}
          >
            {language === "tr" ? "Oyunlar" : language === "fr" ? "Jeux" : "Games" } <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            // to="/projects"
            to={language === "tr" ? "/tr/projeler" : language === "fr" ? "/fr/projets" : "/projects" }
            activeStyle={{ color: "var(--orange-1)" }}
            partiallyActive={true}
          >
            {language === "tr" ? "Projeler" : language === "fr" ? "Projets" : "Projects" } <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            // to="/about"
            to={language === "tr" ? "/tr/hakkinda" : language === "fr" ? "/fr/a-propos-de" : "/about" }
            activeStyle={{ color: "var(--orange-1)" }}
            partiallyActive={true}
          >
            {language === "tr" ? "Hakkında" : language === "fr" ? "À Propose De" : "About" }<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </NavLink>
        </NavLi>
      </RighNavLinks>
      <SocialLinks>
        <SocialLink>
          <A href="https://github.com/ilci66">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </A>
        </SocialLink>
        <SocialLink>
          <A href="https://codepen.io/ilci">
            <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
          </A>
        </SocialLink>
        <SocialLink>
          <A href="https://ilkerakbiyik.com">
            <FontAwesomeIcon icon={faPortrait}></FontAwesomeIcon>
          </A>
        </SocialLink>
        <SocialLink>
          <A href="mailto:akbiyik.ilker.dev.gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
          </A>
        </SocialLink>
      </SocialLinks>
    </StyledRightNav>
  )
}

export default RightNav

const StyledRightNav = styled.div`
  background-color: var(--text-color-dark);
  position: fixed;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  z-index:10;
  // display : ${({ open }) => open ? "block" : 'none'};
  @media screen and (min-width: 961px) {
    display: none;
  }
`

const RighNavLinks = styled.ul`
  margin-top:100px;
  margin-left: 20px;
  margin-right: 20px;
`
const NavLi = styled.li`
  list-style:none;
  font-size: 1.8rem;
  margin-top: 20px;

`
const NavLink = styled(Link)`
  color: var(--text-color-light);
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`

const SocialLinks = styled.ul`
  color: var(--text-color-light);
  position: absolute;
  bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 0 10px;
  justify-items: space-around;
  
`
const SocialLink = styled.li`
  list-style:none;
  font-size: 1.8rem;
  justify-self: center;
  // color: yellow;
  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`
const A = styled.a`
  color: var(--text-color-light);
  transition: .3s;
  &:hover{
    color: var(--orange-1);
  }
`

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const FooterBottomComponent = () => {
  return (
    <FooterBottom>
    <Icons>
      <IconA href="/#">
        <FontAwesomeIcon icon={faFacebook} />
      </IconA>
      <IconA href="https://wwizard-blog.netlify.app/">
        <FontAwesomeIcon icon={faBlog} />
      </IconA>
      <IconA href="https://github.com/ilci66">
        <FontAwesomeIcon icon={faGithub} />
      </IconA>
      <IconA href="/#">
        <FontAwesomeIcon icon={faTwitter} />
      </IconA>
    </Icons>
    <Text>You can find the full code <A href='#'>here</A> and the blog post <A href='/#'>here</A>. Ilker AKBIYIK</Text>
  </FooterBottom>
  )
}

export default FooterBottomComponent


const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  grid-column: 1/-1;
  align-items:center;
  @media (max-width: 960px){
    padding-top: 20px;
  }
  @media (max-width: 720px){
    flex-direction: column;
  }
`
const A = styled.a`
  color: var(--baby-blue-eyes);
  text-decoration: none;
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px){
    width: 100%;
    justify-content: space-between;
  }
`

const IconA = styled.a`
  font-size: 2.4rem;
  color: var(--baby-blue-eyes);
  background: var(--gray-2);
  margin: 10px;
  padding: 10px 20px;
  transition: 0.4s;
  :hover {
    background: var(--white);
    color: var(--nadeshiko-pink);
  }
  @media (max-width: 600px){
    padding: 6px 8px;
    margin: 4px;
  }
`

const Text = styled.p`
  margin-bottom: 20px;
  margin-left: auto;    
  @media (max-width: 720px){
    margin: auto;
  }
`
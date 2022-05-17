import React from 'react'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'
import styled from 'styled-components'
import GlobalStyle from '../../globalStyle/globalStyles'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();
const Layout = ({children}) => {

  return (<>
  <GlobalStyle />
  <PageContainer>
    <NavBar />
      {children}
    <Footer />
  </PageContainer>
  </>
  )
}

export default Layout

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
`
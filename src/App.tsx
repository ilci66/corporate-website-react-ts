import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';
import Banner from './components/Banner';
import Navbar from './components/navbar/Navbar';
import About from './components/About';
import Offer from './components/offer/Offer';
import Portfolio from './components/portfolio/Portfolio';
import RecentWork from './components/recentWork/RecentWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {

  const [ onScreen, setOnScreen ] = useState();
  const [ bgColor, setBGColor ] = useState("inherit");

  useEffect(() => {
    if(!onScreen) setBGColor("var(--white)");
    else if(onScreen) setBGColor("inherit");
  }, [onScreen])

  return (
    <AppWrapper>
      <Navbar bgColor={bgColor}/>
      <Banner setOnScreen={setOnScreen}/>
      <About />
      <Offer />
      <Portfolio />
      <RecentWork />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex
  width: 100vw;
`;
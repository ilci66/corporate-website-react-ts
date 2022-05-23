import React from 'react';
import  styled  from 'styled-components';
import Banner from './components/Banner';
import Navbar from './components/navbar/Navbar';
import About from './components/About';
import Offer from './components/Offer';
import Portfolio from './components/Portfolio';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Banner />
      <About />
      <Offer />
      <Portfolio />
      <RecentWork />
      <Contact />
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex
  width: 100vw;
`;
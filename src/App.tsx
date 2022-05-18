import React from 'react';
import  styled  from 'styled-components';
import Banner from './components/Banner';
import Navbar from './components/navbar/Navbar';
import About from './components/About';

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Banner />
      <About />
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex
  width: 100vw;
`;
import React from 'react';
import  styled  from 'styled-components';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <AppWrapper>
      <Navbar />
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex
  width: 100vw;
`;
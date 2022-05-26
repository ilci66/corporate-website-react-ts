import React from 'react';
import  styled  from 'styled-components';
import Banner from './components/Banner';
import Navbar from './components/navbar/Navbar';
import About from './components/About';
import Offer from './components/offer/Offer';
import Portfolio from './components/portfolio/Portfolio';
import RecentWork from './components/recentWork/RecentWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useInView } from 'react-intersection-observer'


function App() {

  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 1,
  });

  console.log("is it in app ,", inView)
  return (
    <AppWrapper>
      <Navbar inView={inView}/>
      <Banner ref={ref}/>
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
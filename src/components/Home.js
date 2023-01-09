import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Services from '../components/Services';
import About from '../components/About';
import Testomonials from '../components/Testomonials';
import Contact from '../components/Contact';
import Social from '../components/Social';

function Home() {
  return (
    <div>
      <Header />

      <Main />
      <Services />
      <Intro />
      <About />
      <Social />
      <Testomonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

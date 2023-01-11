import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Services from '../components/Services';
import About from '../components/About';
import Testomonials from '../components/Testomonials';
import Cta from '../components/Cta';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import Quote from '../components/Quote';

function Home() {
  return (
    <div>
      <Header />

      <Main />
      <Services />
      <Intro />
      <Social />
      <About />
      <Quote />
      <Gallery />
      <Testomonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;

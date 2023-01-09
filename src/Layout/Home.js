import React from 'react';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Services from '../components/Services';
import About from '../components/About';
import Testomonials from '../components/Testomonials';
import Contact from '../components/Contact';
import Video from '../components/Video';

export default function Home() {
  return (
    <div>
      <Main />
      <Services />
      <Video/>
      <Intro />
      <About />
      <Testomonials />
      <Contact />
    </div>
  );
}

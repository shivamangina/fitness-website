import React from 'react';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Services from '../components/Services';
import About from '../components/About';
import Testomonials from '../components/Testomonials';
import Cta from '../components/Cta';
import Video from '../components/Video';
import Gallery from '../components/Gallery';
import Quote from '../components/Quote';

export default function Home() {
  return (
    <div>
      <Main />
      <Services />
      <Video/>
      <Intro />
      <About />
      <Quote/>
      <Gallery/>
      <Testomonials />
      <Cta />
    </div>
  );
}

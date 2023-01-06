import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import Services from './components/Services';
import About from './components/About';
import Testomonials from './components/Testomonials';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />

      <Main />
      <Services />
      <Intro />
      <About />
      <Testomonials/>
      <Contact/>
      
    </>
  );
}

export default App;

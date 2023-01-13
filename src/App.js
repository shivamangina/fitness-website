import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classes from './components/Classes';
import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Layout/Home';
import Contact from './components/Contact';
import Team from './components/Team'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

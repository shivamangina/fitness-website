import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Classes from './components/Classes';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;

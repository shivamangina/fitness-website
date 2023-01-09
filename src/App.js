import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Classes from './components/Classes';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classes' element={<Classes/>} />
      </Routes>
    </Router>
  );
}

export default App;

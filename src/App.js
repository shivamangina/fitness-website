import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Classes from './components/Classes';
import Homes from './pages/Homes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/classes' element={<Classes/>} />
      </Routes>
    </Router>
  );
}

export default App;

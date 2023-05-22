import './App.css';
import { About } from './components/screens/About';
import Home from './components/screens/Home';
import { Routes, Route } from "react-router-dom";
import { Settings } from './components/screens/Settings';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

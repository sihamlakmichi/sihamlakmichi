import './App.css';
 import Home from './home';
 import Contact from './contact';
 import About from './about';
import Stages from './stages';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
               <div> 
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stages" element={<Stages />} />
        </Routes>
      </div>

     <Home />
     <Contact />
      <About />
      <Stages />

    </div>
  );
}

export default App;

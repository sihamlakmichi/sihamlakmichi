import './App.css';
import Home from './home';
import Contact from './contact';
import About from './about';
import Stages from './stages';
import Header from './header';
import Footer from './foter';
import Projects from './projects';
import Skills from './skills';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        
        {/* Route par défaut */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
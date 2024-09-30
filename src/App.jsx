import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header.jsx';
import Home from './pages/Home.jsx';
import Music from './pages/Music.jsx';
import Gaming from './pages/Gaming.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App
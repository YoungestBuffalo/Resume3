import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/js/Header';
import Footer from './components/js/Footer';
import Home from './pages/js/Home';
import Contact from './pages/js/Contact';
import CobbleWebGL from './pages/js/CobbleWebGL';
import DonWebGL from './pages/js/DonWebGL';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cobbleclimber" element={<CobbleWebGL />} />
          <Route path="/don" element={<DonWebGL />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/js/Header';
import Footer from './components/js/Footer';
import Home from './pages/js/Home';
import Contact from './pages/js/Contact';
import WebGL from './pages/js/WebGL';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cobblewebgl" element={<WebGL
              loaderUrl="build/webbuild1.loader.js"
              dataUrl="build/webbuild1.data"
              frameworkUrl="build/webbuild1.framework.js"
              codeUrl="build/webbuild1.wasm"
          />}
          />
          <Route path="/donwebgl" element={<WebGL
              loaderUrl="build/DonWebGL.loader.js"
              dataUrl="build/DonWebGL.data"
              frameworkUrl="build/DonWebGL.framework.js"
              codeUrl="build/DonWebGL.wasm"
          />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
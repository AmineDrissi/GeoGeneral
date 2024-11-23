import React from 'react';
import "./style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

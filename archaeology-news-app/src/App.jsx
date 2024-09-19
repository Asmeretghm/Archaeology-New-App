import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import News from './components/Newslist';
import Hero from './components/Hero';
import Footer from './components/Footer'
import './App.css'; // Add styles here


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/NewsList" element={<News />} />
        <Route path="/Footer" element={<Footer />} />
        {/* Add more routes as needed */}
      </Routes>

    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-background">
        <Home />
        <Skills />

        <About />
        <div className="bg-background px-[5.5vw] lg:px-[1.611vw]"></div>
      </main>
    </Router>
  );
}

export default App;

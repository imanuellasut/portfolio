import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-background">
        <Routes>
          {/* Redirect dari root / ke /en */}
          <Route path="/portofilo" element={<Navigate to="/en" replace />} />
          {/* Route untuk halaman dengan path /en */}
          <Route path="/en" element={<Page />} />
          {/* Route untuk halaman dengan path /id */}
          <Route path="/id" element={<Page />} />
          {/* Tambahkan route lain jika perlu */}
        </Routes>
      </main>
    </Router>
  );
}

function Page() {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Contact />
      {/* Tambahkan sections lainnya jika perlu */}
    </>
  );
}

export default App;

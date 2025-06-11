import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import GamePage from './GamePage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <header style={{ padding: '1rem', backgroundColor: '#222', color: 'white' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>
            GameHub
          </Link>
        </header>

        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidates" element={<CandidateSearch />} />
          <Route path="/saved" element={<SavedCandidates />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </>
  );
};

export default App;

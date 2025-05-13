import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoTable from './components/CryptoTable';
import CryptoDetail from './components/CryptoDetail';

function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<CryptoTable />} />
      <Route path="/crypto/:id" element={<CryptoDetail />} />
    </Routes>
  </Router>
);
}

export default App;
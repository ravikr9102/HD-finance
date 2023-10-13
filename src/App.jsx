import Display from './components/Display';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayForm from './components/DisplayForm';
import Funded from './components/Funded';
import Payment from './components/Payment';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/display" element={<DisplayForm />} />
          <Route path="/funded" element={<Funded />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

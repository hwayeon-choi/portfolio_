import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

const App = () => {
  return (
  <Routes>
    <Route element={<Header />} />
  </Routes>);
}

export default App;

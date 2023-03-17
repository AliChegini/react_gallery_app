import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import '../App.css';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="container">
        <SearchForm onSearch={handleSearch} />
        <MainNav />
        <Routes>
          <Route path="/search/:query" element={<PhotoContainer category={searchTerm} />} />
          <Route path="/galaxy" element={<PhotoContainer category="galaxy" />} />
          <Route path="/dogs" element={<PhotoContainer category="dogs" />} />
          <Route path="/computers" element={<PhotoContainer category="computers" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

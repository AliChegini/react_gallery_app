import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        <i className="material-icons">search</i>
      </button>
    </form>
  );
};

export default SearchForm;


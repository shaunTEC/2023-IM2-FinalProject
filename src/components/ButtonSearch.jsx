import React from 'react';
import Button from 'react-bootstrap/Button';
import search from '../assets/search.svg';
import '../css/ButtonSearchStyle.css';

function Search() {
  return (
    <>
      <Button className="button-search">
        <img src={search} alt="Search" className="search-icon" />
      </Button>
    </>
  );    
}

export default Search;
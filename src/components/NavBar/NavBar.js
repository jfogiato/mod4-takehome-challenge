import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ searchArticles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSearch = e => {
    e.preventDefault();
    searchArticles(searchTerm);
  };

  return (
    <nav className="navbar bg-body-tertiary sticky-top d-flex">
      <div className="container-fluid">
        <Link to="/"><p className="navbar-brand">NewsLinkz</p></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={handleChange}
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
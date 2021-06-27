import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
  const [url, setUrl] = useState('http://localhost:3000/search');

  return (
    <div>
      <nav className="nav">
        <div className="nav_logo">
          <div className="nav_logo_icon">
            <i className="fab fa-github" />
            <i className="fas fa-search" />
          </div>

          <div className="nav_logo_text">
            <h3 className="nav_logo_text_git">GitHub</h3>
            <h6 className="nav_logo_text_search">Search</h6>
          </div>
        </div>

        <div className="nav_menu">
          <Link to="/search" className={url === 'http://localhost:3000/search' ? 'nav_menu_search_active' : 'nav_menu_search'} onClick={() => setUrl('http://localhost:3000/search')}>Search</Link>
          <Link to="/my-list" className={url === 'http://localhost:3000/my-list' ? 'nav_menu_mylist_active' : 'nav_menu_mylist'} onClick={() => setUrl('http://localhost:3000/my-list')}>My list</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

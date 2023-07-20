import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

function Navbar(props) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-sm exo navbar-dark bg-dark fixed-top ">
      <div className="container">
        <a href="#" className="navbar-brand mb-0 h1">
          Caffine Crew
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-controls="collapseExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapseExample">
          <ul className="navbar-nav ">
            <li className="nav-items ">
              <Link to='/' style={{ textDecoration: 'none' }}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-items">
              <Link to='/menu' style={{ textDecoration: 'none' }}
                className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
            </li>
            <li className="nav-items">
              <Link to='/about' style={{ textDecoration: 'none' }}
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-items wrapper">
              <Link to='/cart' style={{ textDecoration: 'none' }}
                className={`nav-link  ${location.pathname === '/cart' ? 'active' : ''}`}>
                <i className="fa-solid fa-cart-shopping"></i>
                
              </Link>
              <span>{props.cart==0 ? null:props.cart.length  }</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

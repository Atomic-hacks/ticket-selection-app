//import React from 'react';
import '../src/App.css'
import logo from '../src/assets/thumb.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="thumb.svg" />
        <span className="logo-text">TICZ</span>
      </div>
      <nav className="navigation">
        <a href="#events">Events</a>
        <a href="#my-tickets">My Tickets</a>
        <a href="#about">About Project</a>
      </nav>
      <button className="my-tickets-button">MY TICKETS →</button>
    </header>
  );
};

export default Header;
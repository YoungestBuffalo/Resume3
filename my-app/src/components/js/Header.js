import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/header.css';

const ExternalLinkIcon = () => (
<svg height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Interface / External_Link">
<path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to get the page title based on the current path
  const getPageTitle = () => {
    const path = location.pathname;
    switch(path) {
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/cobbleclimber':
        return 'Cobble Climber';
      case '/don':
        return 'Don';
      default:
        return 'Home';
    }
  };

  //Internal links for the navigation
  const internalLinks = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/cobbleclimber', label: 'Cobble Climber' },
    { path: '/don', label: 'Don' },
  ];

  // Render the header
  return (
    <header className="Header">
      <div className="logo">{getPageTitle()}</div>
      <nav className={`navbar ${isOpen ? 'show' : ''}`}>
        <ul>
          {/* Map through internal links and render those not matching current path */}
          {internalLinks.map(link => (
            link.path !== location.pathname && (
              <li key={link.path}>
                <Link to={link.path} onClick={toggleMenu}>{link.label}</Link>
              </li>
            )
          ))}
          {/* External links */}
          <li><a href="https://github.com/YoungestBuffalo" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Github <ExternalLinkIcon /></a></li>
          <li><a href="https://www.linkedin.com/in/julian412/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>LinkedIn <ExternalLinkIcon /></a></li>
          <li><a href="https://soundcloud.com/julianhenrymusic" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>SoundCloud <ExternalLinkIcon /></a></li>
          <li><a href="https://www.instagram.com/young_buffalo/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Instagram <ExternalLinkIcon /></a></li>
        </ul>
      </nav>
      {/* Hamburger menu icon */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
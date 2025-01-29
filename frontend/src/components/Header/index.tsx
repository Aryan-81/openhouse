"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Dynamically load Bootstrap CSS
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{top:0,zIndex:101}}> 
      <div className="container">
        <Link href="/" className="navbar-brand">
          PRAGYAAN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="ftco-nav" style={{flexGrow:'0'}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#events" className="nav-link">
                events
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                about
              </a>
            </li>
            <li className="nav-item cta">
              <Link href="/register?event_id=1" className="nav-link">
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
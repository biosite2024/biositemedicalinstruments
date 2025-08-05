import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // adjust path if needed

export default function Navbar() {
  return (
    <header className="header">
      {/* Topbar Logo Slider can be added here if needed */}

      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Biosite Logo" />
                  </Link>
                </div>
                <div className="mobile-nav" />
              </div>

              <div className="col-lg-7 col-md-9 col-12">
                {/* Main Menu */}
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <Link to="/">HOME</Link>
                      </li>

                      <li>
                        <a href="#">WORKFORCE <i className="icofont-rounded-down" /></a>
                        <ul className="dropdown">
                          <li><Link to="/orgchart2025">Org Chart</Link></li>
                          <li><Link to="/directory">Directory</Link></li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">FORMS <i className="icofont-rounded-down" /></a>
                        <ul className="dropdown">
                          <li><Link to="/sales">Sales</Link></li>
                          <li><Link to="/mktg">Marketing</Link></li>
                          <li><Link to="/service">Technical Service</Link></li>
                          <li><Link to="/ops">Operations</Link></li>
                          <li><Link to="/finance">Finance & Accounting</Link></li>
                          <li><Link to="/regulatory">Regulatory</Link></li>
                          <li><Link to="/hr">Human Resources</Link></li>
                          <li><Link to="/admin">Admin</Link></li>
                        </ul>
                      </li>

                      <li><Link to="/gl">GUIDELINES</Link></li>
                      <li><Link to="/pp">POLICY & PROCEDURES</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1gBfFoT3LybBWKrt53h0sv0AqcYLeRkh2sPX4rwE0gSs/edit?usp=sharing"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

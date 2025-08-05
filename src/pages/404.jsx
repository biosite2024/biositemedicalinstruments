import React from 'react';
import '../assets/style.css'; // adjust the path if needed

export default function Error404Page() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
              <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Header */}
      
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="sli h-100">
                <div className="slider">
                  <div className="slide-track">
                    {[...Array(2)].flatMap(() => (
                      [
                        "10", "11", "12", "13", "14", "15", "3", "4", "5", "6", "7", "8", "9"
                      ].map((num, i) => (
                        <div className="slide" key={`${num}-${i}`}>
                          <img src={`/img/headlogo/${num}.png`} height="100" width="150" alt="" />
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active"><a href="index.html">HOME</a></li>
                      <li><a href="#">WORKFORCE</a>
                        <ul className="dropdown">
                          <li><a href="orgchart2025.html">Org Chart</a></li>
                          <li><a href="directory.html">Directory</a></li>
                        </ul>
                      </li>
                      <li><a href="#">FORMS</a>
                        <ul className="dropdown">
                          <li><a href="sales.html">Sales</a></li>
                          <li><a href="mktg.html">Marketing</a></li>
                          <li><a href="service.html">Technical Service</a></li>
                          <li><a href="ops.html">Operations</a></li>
                          <li><a href="finance.html">Finance & Accounting</a></li>
                          <li><a href="regulatory.html">Regulatory</a></li>
                          <li><a href="hr.html">Human Resources</a></li>
                          <li><a href="admin.html">Admin</a></li>
                        </ul>
                      </li>
                      <li><a href="gl.html">GUIDELINES</a></li>
                      <li><a href="pp.html">POLICY & PROCEDURES</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <a
                      href="https://docs.google.com/spreadsheets/d/1gBfFoT3LybBWKrt53h0sv0AqcYLeRkh2sPX4rwE0gSs/edit?usp=sharing"
                      className="btn"
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      {/* Error Page */}
      <section className="error-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              <div className="error-inner">
                <h1>404
                  <span>
                    We apologize for the inconvenience! This page is temporarily unavailable due to ongoing updates to our organizational structure.
                  </span>
                </h1>
                <p>
                  We are currently realigning departments and personnel to better serve you. The page will be accessible once updates are finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content d-flex justify-content-center align-items-center flex-wrap text-center">
                  <p className="m-0">
                    © Copyright 2024 | biositeph.com &nbsp;|&nbsp; Developed by
                    <a
                      href="https://devarete.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center"
                    >
                      <img
                        src="/img/white.png"
                        alt="Designed by Logo"
                        style={{ height: '20px', width: 'auto', marginLeft: '5px' }}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

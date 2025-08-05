import React from 'react';
import '../assets/style.css';

export default function Regulatory() {
  return (
    <>
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

      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="sli h-100">
              <div className="slider">
                <div className="slide-track">
                  {[...Array(2)].flatMap(() =>
                    [10, 11, 12, 13, 14, 15, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <div className="slide" key={`headlogo-${num}`}>
                        <img
                          src={`/img/headlogo/${num}.png`}
                          height="100"
                          width="150"
                          alt=""
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <a href="/">
                    <img src="/img/logo.png" alt="#" />
                  </a>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active"><a href="/">HOME</a></li>
                      <li>
                        <a href="#">WORKFORCE</a>
                        <ul className="dropdown">
                          <li><a href="/orgchart2025">Org Chart</a></li>
                          <li><a href="/directory">Directory</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">FORMS</a>
                        <ul className="dropdown">
                          <li><a href="/sales">Sales</a></li>
                          <li><a href="/mktg">Marketing</a></li>
                          <li><a href="/service">Technical Service</a></li>
                          <li><a href="/ops">Operations</a></li>
                          <li><a href="/finance">Finance & Accounting</a></li>
                          <li><a href="/regulatory">Regulatory</a></li>
                          <li><a href="/hr">Human Resources</a></li>
                          <li><a href="/admin">Admin</a></li>
                        </ul>
                      </li>
                      <li><a href="/gl">GUIDELINES</a></li>
                      <li><a href="/pp">POLICY & PROCEDURES</a></li>
                    </ul>
                  </nav>
                </div>
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

      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Regulatory Department</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pf-details section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">CTRL#</th>
                    <th scope="col">FORM NAME</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRINTED</th>
                    <th scope="col">EDITED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      REG<br />001
                    </th>
                    <td>Product Complaint Handling Form</td>
                    <td>
                      This document is used by the regulatory department to systematically record, investigate, and resolve
                      complaints related to medical products. It guarantees that all product-related issues are documented and
                      addressed in accordance with regulatory standards, such as those set by the FDA or other relevant
                      authorities.
                    </td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/downloadpdf/forms/reg/printed-Product Complaint Handling Form.pdf"
                        role="button"
                      >
                        <i className="bi bi-download"></i>
                      </a>
                    </td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/downloadpdf/forms/reg/edited-product complaint handling form.pdf"
                        role="button"
                      >
                        <i className="bi bi-pen-fill"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

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

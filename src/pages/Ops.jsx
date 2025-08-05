import React from 'react';
import '../assets/style.css';

export default function Ops() {
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

      {/* Header Area */}
      
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="sli h-100">
                <div className="slider">
                  <div className="slide-track">
                    {[...Array(2)].flatMap(() => [
                      10,11,12,13,14,15,3,4,5,6,7,8,9
                    ].map(n => (
                      <div className="slide" key={n+Math.random()}>
                        <img src={`/img/headlogo/${n}.png`} height="100" width="150" alt="logo" />
                      </div>
                    )))
                    }
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
                    <a href="/"><img src="/img/logo.png" alt="Logo" /></a>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active"><a href="/">HOME</a></li>
                        <li><a href="#">WORKFORCE<i className="icofont-rounded-down"></i></a>
                          <ul className="dropdown">
                            <li><a href="/orgchart">Org Chart</a></li>
                            <li><a href="/directory">Directory</a></li>
                          </ul>
                        </li>
                        <li><a href="#">FORMS<i className="icofont-rounded-down"></i></a>
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
                    <a href="https://docs.google.com/spreadsheets/d/1gBfFoT3LybBWKrt53h0sv0AqcYLeRkh2sPX4rwE0gSs/edit?usp=sharing" className="btn">View Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      {/* Breadcrumbs */}
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Operations Department</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Details */}
      <section className="pf-details section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>CRTL#</th>
                    <th>FORM NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PRINTED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OPS <br />001</td>
                    <td>Pull-Out Form</td>
                    <td>This form is used request for pulling-out of items from certain account or customer due to near expiry, replacement and return.</td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/ops/OPS - PULL OUT FORM.pdf">Download</a>
                    </td>
                  </tr>
                  <tr>
                    <td>OPS <br />002</td>
                    <td>Warehouse Receiving of Product Checklist Form</td>
                    <td>This form is used to check and record received shipments at the warehouse...</td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/ops/Printed-WRPC.pdf">Download</a>
                    </td>
                  </tr>
                  <tr>
                    <td>OPS <br />003</td>
                    <td>Equipment Gate Pass Form</td>
                    <td>This document authorizes the movement of equipment in/out of the premises...</td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/ops/printed_equipmentgatepass003.pdf">Download</a>{' '}
                      <a className="btn btn-primary" href="/downloadpdf/forms/ops/edited_ Gate Pass003.pdf">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                <div className="copyright-content text-center">
                  <p className="m-0">
                    © Copyright 2024 | biositeph.com &nbsp;|&nbsp; Developed by
                    <a href="https://devarete.com" target="_blank" rel="noopener noreferrer">
                      <img src="/img/white.png" alt="Devarete" style={{ height: '20px', marginLeft: '5px' }} />
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

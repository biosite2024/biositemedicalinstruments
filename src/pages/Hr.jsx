import React from 'react';
import '../assets/style.css';

export default function Hr() {
  return (
    <>
      {/* DO NOT INCLUDE , , , or  tags in JSX */}

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
      {/* Move the full header content from your HTML into a separate React component for reusability */}
      
        {/* ...rest of header and nav JSX... */}
      

      {/* Breadcrumbs */}
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Human Resources Department</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Table */}
      <section className="pf-details section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Extract the table data into a reusable component or JSON to map dynamically */}
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">CRTL#</th>
                    <th scope="col">FORM NAME</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRINTED</th>
                    <th scope="col">EDITED</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Put each <tr> row into a component or map from JSON */}
                  {/* Example row below (repeat or map from a JSON array) */}
                  <tr>
                    <th scope="row">HRD<br/>001</th>
                    <td>Pre-employment Requirements</td>
                    <td>This form provides the pre-employment requirements to be provided by the employee on their first day at work.</td>
                    <td><h3 style={{ margin: 'auto', width: '70%' }}><i className="fa-solid fa-eye-slash"></i></h3></td>
                    <td></td>
                  </tr>
                  {/* ...more rows... */}
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
                <div className="copyright-content d-flex justify-content-center align-items-center flex-wrap text-center">
                  <p className="m-0">
                    © Copyright 2024 | biositeph.com
                    &nbsp;|&nbsp; Developed by
                    <a href="https://devarete.com" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center">
                      <img src="/img/white.png" alt="Designed by Logo" style={{ height: '20px', width: 'auto', marginLeft: '5px' }} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scripts should be added via index.html or dynamically imported as needed */}
    </>
  );
}

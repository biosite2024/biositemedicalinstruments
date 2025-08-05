import React from 'react';
import '../assets/style.css';

export default function Finance() {
  return (
    <div>
      {/* Main content starts here */}
      {/* Remove DOCTYPE, , , and  tags. In React, those are handled in public/index.html */}

      {/* Header Section */}
      
        {/* ...Header content here... */}
      

      {/* Breadcrumbs */}
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Accounting & Finance Department</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forms Table */}
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
                    <th>EDITED</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <th>FAA<br />001</th>
                    <td>Liquidation Form</td>
                    <td>This form documents all necessary details for the liquidation of expenses.</td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/finance/V2 FAA-001.pdf" role="button">Download</a>
                    </td>
                    <td></td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <th>FAA<br />002</th>
                    <td>Cash Advance Form</td>
                    <td>Used to request cash for business expenses subject to liquidation.</td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/finance/printed-cashadvance.pdf" role="button">Download</a>
                    </td>
                    <td>
                      <a className="btn btn-primary" href="/downloadpdf/forms/finance/edited-cashadvance.pdf" role="button">Edit</a>
                    </td>
                  </tr>
                  {/* Additional rows truncated for brevity */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content text-center">
                  <p>
                    © Copyright 2024 | biositeph.com &nbsp;|&nbsp; Developed by
                    <a href="https://devarete.com" target="_blank" rel="noopener noreferrer">
                      <img src="/img/white.png" alt="Devarete Logo" style={{ height: '20px', width: 'auto', marginLeft: '5px' }} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* All external scripts like jQuery should be handled in index.html or via npm in React */}
    </div>
  );
}

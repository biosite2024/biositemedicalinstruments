// src/pages/Pp.jsx
import React from 'react';
import pdfExample from '../assets/downloadpdf/pp/HRD/BMI-PP-HRD-001 - CODE OF CONDUCTv01.pdf';
import logo from '../assets/img/logo.png'; // image import

export default function Pp() {
  return (
    <>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <h2>POLICY & PROCEDURES</h2>
          </div>
        </div>
      </div>

      <section className="pf-details section">
        <div className="container">
          <img src={logo} alt="Company Logo" width="150" />
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>DOC#</th>
                <th>GL NAME</th>
                <th>DESCRIPTION</th>
                <th>VIEW</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HRD<br />001</td>
                <td>Code of Conduct</td>
                <td>Basic employee behavioral policy and expectations</td>
                <td>
                  <a
                    className="btn btn-primary"
                    href={pdfExample}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import '../assets/style.css';

export default function Home() {
  return (
    <div className="page-content home-page">
      <h1>Employee Request Dashboard</h1>
      <p>Select a request type below or scan the QR codes.</p>

      {/* Example of your QR code layout */}
      <div className="qr-section">
        <div className="qr-box">
          <img src="/assets/img/qr/employee-info.png" alt="BMI Employee Info QR" />
          <p>This QR link is intended for the <strong>BMI Employee Information</strong>.</p>
          <a href="https://example.com/employee-info">LINK HERE</a>
        </div>
        {/* Repeat for other QR items */}
      </div>
    </div>
  );
}

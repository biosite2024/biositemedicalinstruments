import React from 'react';
import '../assets/style.css';

export default function Directory() {
  return (
    <>
      {/* The full HTML document structure like , , and  should not be used in a React component. */}
      {/* All content should be placed inside a top-level React fragment or div */}
      {/* You must refactor the HTML to be JSX-compatible and extract repeated components (like tables) into smaller components */}

      {/* For example, move head elements like fonts and CSS links to the main index.html file */}
      
        {/* Top bar slider */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="sli h-100">
                <div className="slider">
                  <div className="slide-track">
                    {[...Array(2)].flatMap(() => (
                      [10, 11, 12, 13, 14, 15, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div className="slide" key={num + Math.random()}>
                          <img
                            src={`/img/headlogo/${num}.png`}
                            height="100"
                            width="150"
                            alt=""
                          />
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add your logo and navigation JSX structure here */}
      

      {/* Main content directory tables */}
      {/* Use reusable components for each department section (e.g., <DepartmentSection title=\"Sales Department\" data={...} /> ) */}
      <section className="partners-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-12">
              <h4 className="partners-section-title bg-white shadow-lg">Executive Department</h4>
              {/* Copy & convert table content here as JSX */}
              {/* You must update all attributes like 'class' to 'className', 'for' to 'htmlFor', and ensure self-closing tags have slashes */}
            </div>
          </div>
        </div>
      </section>

      {/* Repeat for other departments: HR, Sales, Marketing, etc. */}

      <footer className="footer">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content d-flex justify-content-center align-items-center flex-wrap text-center">
                  <p className="m-0">
                    © Copyright 2024 | biositeph.com | Developed by
                    <a href="https://devarete.com" target="_blank" rel="noopener noreferrer">
                      <img src="/img/white.png" alt="Designed by Logo" style={{ height: '20px', width: 'auto', marginLeft: '5px' }} />
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

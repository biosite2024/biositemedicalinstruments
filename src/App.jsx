import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS
import './assets/style.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Directory from './pages/Directory';
import Finance from './pages/Finance';
import Gl from './pages/Gl';
import Hr from './pages/Hr';
import Mktg from './pages/Mktg';
import Ops from './pages/Ops';
import Pp from './pages/Pp';
import Regulatory from './pages/Regulatory';
import Sales from './pages/Sales';
import Error404Page from './pages/404';

function App() {
  return (
    <Router>
      <>
        {/* --- Brand Logo Slider on top --- */}
        <div className="brand-logo-slider" style={{ padding: '20px 0', backgroundColor: '#fff' }}>
          <div className="container text-center">
            <img src="/assets/img/brands/ire.png" alt="ire" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/sakura.png" alt="sakura" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/keyu.png" alt="keyu" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/haier.png" alt="haier" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/dunhame.png" alt="dunhame" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/diasorin.png" alt="diasorin" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/bruner.png" alt="bruner" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/autobio.png" alt="autobio" style={{ height: '30px', margin: '10px' }} />
            <img src="/assets/img/brands/werfen.png" alt="werfen" style={{ height: '30px', margin: '10px' }} />
          </div>
        </div>

        {/* --- Navbar after logos --- */}
        <Navbar />

        {/* --- Main Routes --- */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/gl" element={<Gl />} />
          <Route path="/hr" element={<Hr />} />
          <Route path="/mktg" element={<Mktg />} />
          <Route path="/ops" element={<Ops />} />
          <Route path="/pp" element={<Pp />} />
          <Route path="/regulatory" element={<Regulatory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

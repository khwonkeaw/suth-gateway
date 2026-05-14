import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer';
import suthielogo from './assests/images/suthie.png';
import vitalcarelogo from './assests/images/vitalcare.png';

function App() {
  return (
    <div className="gateway-container">
      <Navbar />

      <header className="hero-section">
        <h1>ยินดีต้อนรับ</h1>
        <p>กรุณาเลือกบริการที่ท่านต้องการใช้งาน</p>
      </header>

      <div className="card-selection">
        {/* ระบบที่ 1: SUTHie Care */}
        <a 
          href="https://suthiecare.suth.go.th/" 
          className="system-card care-side"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="card-icon">
            <img src={suthielogo} alt="SUTHie Care Logo" className="card-logo-img suthie-logo"/>
          </div>
          <div className="card-content">
            <h2>SUTHie Care ศูนย์รวมการลงทะเบียนขอรับคำปรึกษาทางคลินิก </h2>
            <p>สำหรับนักศึกษา บุคลากร หรือบุคคลทั่วไป ที่ต้องการลงทะเบียนขอรับคำปรึกษาทางคลินิก</p>
           <span className="btn-enter">เข้าใช้งานระบบ →</span>
          </div>
        </a>

        {/* ระบบที่ 2: Vital Care */}
        <a 
          href="https://vitalcare.suth.go.th/" 
          className="system-card admin-side"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="card-icon">
            <img src={vitalcarelogo} alt="Vital Care Logo" className="card-logo-img" />
          </div>
          <div className="card-content">
            <h2>Vital Care ระบบส่งเสริมกิจกรรมสุขภาพเเละติดตามพฤติกรรมสุขภาพของผู้ใช้</h2>
            <p>ระบบส่งเสริมกิจกรรมสุขภาพเเละติดตามพฤติกรรมสุขภาพของผู้ใช้</p>
            <span className="btn-enter">เข้าใช้งานระบบ →</span>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
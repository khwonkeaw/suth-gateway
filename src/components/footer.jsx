import React from 'react';
import '../styles/footer.css';
import logo from '../assests/images/logo_SUTH.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-left">
          <img
            src={logo}
            className="footer-logo"
          />

          <p className="footer-description">
            โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี
          </p>
        </div>

        {/* Right */}
        <div className="footer-right">
  <h3>ติดต่อเรา</h3>

  <div className="footer-contact-info">
    <p>โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี 111 ถ.มหาวิทยาลัย ต.สุรนารี</p>
    <p>อ.เมือง จ.นครราชสีมา โทร 0 4437 6555 , แฟกซ์ 0 4437 6999</p>

    <p>
      เว็บไซต์:
      <a
        href="https://www.suth.go.th"
        target="_blank"
        rel="noreferrer"
      >
        www.suth.go.th
      </a>
    </p>
  </div>
</div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี
          สงวนลิขสิทธิ์
        </p>
      </div>
    </footer>
  );
};

export default Footer;
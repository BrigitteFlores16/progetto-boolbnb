import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4 border-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center text-black px-3">
          <div>
            © 2025 Boolb&b, Inc.
            <a href="#" className="text-black text-decoration-none mx-2">
              Privacy
            </a>
            ·
            <a href="#" className="text-black text-decoration-none mx-2">
              Termini
            </a>
            ·
            <a href="#" className="text-black text-decoration-none mx-2">
              Dettagli dell'azienda
            </a>
          </div>
          <div>
            <a href="#" className="mx-2 text-black text-decoration-none">
              <i className="fa-solid fa-globe"></i> Italiano (IT)
            </a>
            <a href="https://www.x.com" className="mx-2">
              <i className="fa-brands fa-x"></i>
            </a>
            <a href="https://www.instagram.com" className="mx-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" className="mx-2">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.youtube.com" className="mx-2">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

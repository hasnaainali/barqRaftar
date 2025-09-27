import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Left */}
      <div className="footer-col">
        <img
          src={`${process.env.PUBLIC_URL}/images/barqRaftar-logo.png`}
          alt="BarqRaftar Logo"
          className="footer-logo light-logo"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/barqRaftar-logo.png`}
          alt="BarqRaftar Logo"
          className="footer-logo dark-logo"
        />
        <p className="footer-text">
          All rights reserved, the BarqRaftar TECHNOLOGIES logo and trademarks
          may not be used or reproduced without consent of the owner.
        </p>
        <p className="footer-copy">© 2025, BarqRaftar TECHNOLOGIES</p>
      </div>

      {/* Regional Websites */}
      <div className="footer-col">
        <h3 className="footer-heading">Our Regional Websites</h3>

        <a
          href="https://postex.ae/"
          target="_blank"
          rel="noreferrer"
          className="footer-link region-link"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/uae-logo.png`}
            alt="UAE Logo" className="region-logo" />
          United Arab Emirates
        </a>

        <a
          href="https://postex.sa/"
          target="_blank"
          rel="noreferrer"
          className="footer-link region-link"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/ksa-logo.png`}
            alt="KSA Logo" className="region-logo" />
          Saudi Arabia
        </a>
      </div>

      {/* Products */}
      <div className="footer-col">
        <h3 className="footer-heading">Our Products</h3>
        <ul className="footer-list">
          <li>
            <a href="https://postex.pk/cod" target="_blank" rel="noreferrer">
              Logistics
            </a>
          </li>
          <li>
            <a
              href="https://xpay.postexglobal.com/"
              target="_blank"
              rel="noreferrer"
            >
              XPay Payment Gateway
            </a>
          </li>
          <li>
            <a href="https://postex.pk/finance" target="_blank" rel="noreferrer">
              Financing
            </a>
          </li>
          <li>
            <a
              href="https://postex.pk/business-suite"
              target="_blank"
              rel="noreferrer"
            >
              Business Suite
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <div className="contact">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.8 19.8 0 0 1 .08 1.18 2 2 0 0 1 2.07 0h3a2 2 0 0 1 2 1.72 12.6 12.6 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6 8a16 16 0 0 0 6 6l1.36-1.32a2 2 0 0 1 2.11-.45 12.6 12.6 0 0 0 2.81.7A2 2 0 0 1 19 16.92Z" />
            </svg>
            (042) 111 786 227
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            support@barqraftar.com
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Lahore, Punjab
          </p>
        </div>

        {/* Social Links */}
        <div className="social-icons">
          <a
            href="https://www.facebook.com/PostEx.pk/"
            target="_blank"
            rel="noreferrer"
          >
            {/* Keep same icons unless you have BarqRaftar socials */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/postex.pk/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>

          <a href="https://x.com/postexpk" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 4.01c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.29 4.29 0 0 0-7.3 3.9 12.2 12.2 0 0 1-8.85-4.48 4.29 4.29 0 0 0 1.33 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.29 4.29 0 0 0 3.44 4.21 4.28 4.28 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.61 8.61 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.62 8.62 0 0 0 22 4.01z" />
            </svg>
          </a>

          <a
            href="https://youtube.com/@postexpk"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.87 23 12 23 12s0-3.87-.46-5.58Z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

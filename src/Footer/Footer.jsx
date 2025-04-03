import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-700 text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Packages</h6>
        <Link to="/chardham-tour" className="link link-hover">Chardham tour</Link>
        <Link to="/chardham-by-helicopter" className="link link-hover">Chardham by helicopter</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms-of-use" className="link link-hover">Terms of use</Link>
        <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
        <Link to="/cookie-policy" className="link link-hover">Cookie policy</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Booking</h6>
        <Link to="/tours" className="link link-hover">Tours</Link>
        <Link to="/helicopter" className="link link-hover">Helicopter</Link>
        <Link to="/hotels" className="link link-hover">Hotels</Link>
        <Link to="/cabs" className="link link-hover">Cabs</Link>
        <Link to="/trekking" className="link link-hover">Trekking</Link>
      </nav>
    </footer>
  );
};

export default Footer;

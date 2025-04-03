import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm"; // ✅ Corrected Import Path

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="navbar bg-[#FF9300] shadow-sm text-white">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="">Packages</Link></li>
                
              <li><Link to="#">Luxury</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">Chardham</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Packages">Packages</Link></li>
            
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className="bg-[#0000FF] px-2 py-2 rounded" onClick={() => setShowForm(true)}>Book Now</button>
        </div>
      </div>

      {/* Show Popup Form when Book Now is clicked */}
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Navbar;

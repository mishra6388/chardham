import React from "react";
import aboutchardham from "../assets/aboutchardham.jpg"; // Ensure this is used or remove it

const Aboutchardham = () => {
  return (
    <div className="about-chardham bg-orange-400 py-12 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">About Chardham</h2>
        <p className="text-lg text-white mb-4">
          The Chardham Yatra is one of the most sacred pilgrimages in India, comprising four holy sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. These destinations are nestled in the majestic Himalayas, offering not only spiritual solace but also breathtaking natural beauty.
        </p>
        <p className="text-lg text-white">
          Devotees from across the world embark on this journey to seek blessings and purify their souls. The yatra holds immense significance in Hindu mythology, making it a once-in-a-lifetime experience for many.
        </p>
      </div>
    </div>
  );
};

export default Aboutchardham;

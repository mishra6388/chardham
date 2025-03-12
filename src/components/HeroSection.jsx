import React from "react";
import chardham from "../assets/chardham.jpg"; // Corrected import

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${chardham})`, // Fixed template literal
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Chardham Yatra</h1>
          <p className="mb-5">
          "Embark on a divine journey to the sacred Char Dham, where spirituality meets serenity.
           Plan your pilgrimage with us for a seamless and blessed experience!"
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

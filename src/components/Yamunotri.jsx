import React from "react";
import yamnotrii from "../assets/yamnotrii.webp";

const Yamunotri = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full w-full">
              <img 
                src={yamnotrii} 
                alt="yamunotri" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h2 className="text-xl font-bold">Yamunotri</h2>
                <p className="text-gray-600 flex-grow">Yamunotri, the sacred source of the Yamuna River,
                 is one of the four sites of the Char Dham Yatra, housing the Yamunotri Temple dedicated to Goddess Yamuna in Uttarakhand.</p>
                <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full">See more</button>
              </div>
            </div>
  );
};

export default Yamunotri;

import React from "react";
import gangotri from "../assets/gangotri.webp";

const Gangotri = () => {
  return (
     <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full w-full">
          <img 
            src={gangotri} 
            alt="Destination" 
            className="w-full h-60 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h2 className="text-xl font-bold">Gangotri</h2>
            <p className="text-gray-600 flex-grow">Gangotri, the origin of the holy River Ganga, is one of the four sacred sites of the Char Dham Yatra,
             featuring the Gangotri Temple dedicated to Goddess Ganga in Uttarakhand.</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full">See more</button>
          </div>
        </div>
  );
};

export default Gangotri;

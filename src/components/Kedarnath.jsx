import React from "react";
import kedarnath from "../assets/kedarnath.jpg";

const Kedarnath = () => {
  return (
     <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full w-full">
      <img 
        src={kedarnath} 
        alt="Destination" 
        className="w-full h-60 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h2 className="text-xl font-bold">Kedarnath</h2>
        <p className="text-gray-600 flex-grow">Kedarnath is one of the four sacred sites of the Char Dham Yatra,
         home to the revered Kedarnath Temple dedicated to Lord Shiva, situated in the Himalayas of Uttarakhand.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full">See more</button>
      </div>
    </div>
  );
};

export default Kedarnath;

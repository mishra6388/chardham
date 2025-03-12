import React from "react";
import badrinath from "../assets/badrinath.jpg";

const Badrinath = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full w-full">
  <img 
    src={badrinath} 
    alt="Destination" 
    className="w-full h-60 object-cover"
  />
  <div className="p-4 flex flex-col flex-grow justify-between">
    <h2 className="text-xl font-bold">Badrinath</h2>
    <p className="text-gray-600 flex-grow">Badrinath is one of the four sacred sites of the Char Dham Yatra,
     dedicated to Lord Vishnu and located in Uttarakhand's Garhwal Himalayas.</p>
    <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full">See more</button>
  </div>
</div>


  );
};

export default Badrinath;

import React from "react";
import yamunotrinew from "../assets/yamunotrinew.png";

const Yamunotridate = () => {
    return (
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-screen-md mx-auto gap-2">
            {/* Image Section */}
            <div className="w-40 h-40 flex-shrink-0">
                <img src={yamunotrinew} alt="yamunotri" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Text Section (Moved Up by 5px using -mt-1) */}
            <div className="text-left -mt-1">
                <h3 className="text-xl font-semibold mb-1">Yamunotri Opening Date</h3>
                <p className="text-l">Opening Date: <strong>02 May 2025</strong></p>
                <p className="text-l">Closing Date: <strong>23 Oct 2025 (Tentative)</strong></p>
            </div>
        </div>
    );
};

export default Yamunotridate;

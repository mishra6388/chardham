import React from "react";

const OpeningDates = () => {
  return (
    <>
      {/* Start of Opening Dates */}
      <section className="dhamdates my-4">
        <div className="container p-0">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <img
                src="https://www.chardhamyatra.org/wp-content/themes/CharDham/images/kedarnath.jpg"
                className="w-full"
                alt="Kedarnath Dham"
              />
            </div>
            <div className="w-full md:w-2/3 p-3 bg-white">
              {/* Add content here */}
            </div>
          </div>
        </div>
      </section>

      {/* End of Opening Dates */}
      <section className="p-4 bg-light"></section>

      {/* Scripts and Styles */}
      <script src="https://www.chardhamyatra.org/wp-content/themes/CharDham/js/tiny-slider.js"></script>
      <script src="https://www.chardhamyatra.org/wp-content/themes/CharDham/js/edu-functions.js"></script>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://www.chardhamyatra.org/wp-content/themes/CharDham/css/tiny-slider.css"
      />
    </>
  );
};

export default OpeningDates;

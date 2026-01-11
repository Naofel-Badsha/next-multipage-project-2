import React from "react";

const PremiumFacilities = () => {
  return (
    <section className="bg-[#101828] py-20">
      <div>
        <h1 className="text-4xl pt-4 px-2 text-white font-bold text-center">
          Experience Our Premium Facilities
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-7 text-[20px] text-center">
          Book a viewing today and discover why our properties are the perfect
          place to call home.
        </p>

        <div className="flex gap-5 items-center justify-center mt-5 ">
          <button className="text-[#2b7fff] py-3 px-5 bg-white hover:bg-[#0f5ac9] hover:text-white rounded-full cursor-pointer">
           Book Viewing
          </button>
          <button className="py-3 px-5 hover:bg-[#0f5ac9] text-white border-2 hover:border-[#0F5AC9] border-white rounded-full hover:text-white cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumFacilities;

import Image from "next/image";
import React from "react";

const VirtualTour = () => {
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 items-center gap-20 py-24">
          <div>
            <h1 className="text-5xl pt-4  text-black font-semibold ">
              Take a Virtual Tour
            </h1>
            <p className="text-[#4a5565] mt-7 font-normal text-[18px]">
              Experience our facilities firsthand with our interactive virtual
              tour. Explore every corner of our properties and discover the
              premium amenities we offer.
            </p>

            <div className="flex gap-5 mt-5">
              <button className="bg-[#2b7fff] py-2 px-5 text-white hover:bg-[#0f5ac9] rounded-full">
                Lern More
              </button>
              <button className="bg-white py-2 px-5 hover:bg-[#0f5ac9] text-[#0f5ac9] border-2 border-[#0f5ac9] rounded-full hover:text-white ">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <Image
              src="/assets/facilities1.jpg"
              alt="Story image"
              width={800}
              height={800}
              className="rounded-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;

import Image from "next/image";
import React from "react";
import { FaHandshake } from "react-icons/fa";

const Banner = () => {
  return (
    <section className=" container bg-gradient-to-r from-[#143737] to-[#181237]">
      <div className="grid grid-cols-2 ">
        <div className="py-10">
          <h1 className="text-7xl font-semibold">
            Find Your Perfect Home with <span>Ozalams</span>
          </h1>
          <p>
            Discover your dream property with our comprehensive search tools and
            expert guidance. Start your journey to finding the perfect place to
            call home.
          </p>
          <div className="">
            <Image src="/assets/icon2.png" alt="icons" width={80} height={80} />
            <Image src="/assets/icon1.png" alt="icons" width={80} height={80} />
            <Image src="/assets/icon3.png" alt="icons" width={80} height={80} />
          </div>
          <div className="">
            <div className="mt-4 flex flex-col p-2">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter location, propert"
                  className="border rounded-md p-4 w-full"
                />
                <button className="bg-blue-500 text-white rounded-md px-8 py-3 ">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/*--------This is for position--------*/}
          <div className="absolute">
            <div className="bg-gray-100/50 w-40 p-3 rounded-t-full">
              <div className="bg-white shadow-md w-34 p-3 rounded-t-full">
                <div className="w-28 p-5 bg-gradient-to-r from-blue-600 to-[#8ba9f5] rounded-t-full">
                  <h1 className="text-xl pt-4 px-2 text-white font-semibold text-center">
                    Super Sale $
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/*-------Icon----Pointer---------*/}
          <div className="absolute right-32 top-60">
            <div className="w-56 space-y-5 bg-gray-100/50 p-3 rounded-lg">
              <div className="flex gap-3 items-center justify-center p-3 bg-white rounded-lg">
                <FaHandshake
                  size={35}
                  className="bg-[#5582FF] p-2 rounded-sm text-white"
                />
                Paid Partner Ship
              </div>
              <div className="flex gap-3 items-center justify-center p-3 bg-white rounded-lg">
                <FaHandshake
                  size={35}
                  className="bg-[#5582FF] p-2 rounded-sm text-white"
                />
                Paid Partner Ship
              </div>
              <div className="flex gap-3 items-center justify-center p-3 bg-white rounded-lg">
                <FaHandshake
                  size={35}
                  className="bg-[#5582FF] p-2 rounded-sm text-white"
                />
                Paid Partner Ship
              </div>
              <div className="flex gap-3 items-center justify-center p-3 bg-white rounded-lg">
                <FaHandshake
                  size={35}
                  className="bg-[#5582FF] p-2 rounded-sm text-white"
                />
                Paid Partner Ship
              </div>
            </div>
          </div>
          {/*----------This for Image----------*/}
          <div className="">
            <Image
              src="/assets/main-home1.jpg"
              alt="home images"
              width={600}
              height={600}
              className="object-cover object-center rounded-t-full px-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

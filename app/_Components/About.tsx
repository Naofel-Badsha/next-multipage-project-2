import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-2 items-center gap-20 py-24">
        <div className="relative">
          {/*--------This is for position--------*/}
          <div className="absolute right-24">
            <div className="bg-gray-100/50 w-40 p-3 rounded-t-full">
              <div className="bg-white shadow-md w-34 p-3 rounded-t-full">
                <div className="w-28 p-5 bg-gradient-to-r from-blue-600 to-[#8ba9f5] rounded-t-full">
                  <h1 className="text-sm pt-4 px-2 text-white font-semibold text-center">
                    Limited Time Offer
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/next-door11.png"
            alt="About images"
            width={600}
            height={600}
            className=" object-center rounded-t-full"
          />
        </div>
        <div className="">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
            Sell for more than the home{" "}
            <span className="text-[#4375FF]">Next Door</span>
          </h1>
          <p className="mt-10 text-lg text-[#4a5565]">
            Sell for more than the home next door with smart pricing, strategic
            marketing, strong curb appeal, professional staging, and expert
            negotiation that attracts serious buyers fast.
          </p>
          <div className="">
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
              {/*-----------Box--------1----------*/}
              <div className="bg-[#F3F4F6] p-3 rounded-t-full relative">
                <Image
                  src="/assets/aimgi-1.png"
                  alt="icons"
                  width={600}
                  height={400}
                  className="rounded-t-full"
                />
                <p className="text-sm text-[#4a5565] mt-5 text-center">
                  Rent a Home
                </p>
                <button className="flex items-center justify-center m-auto text-sm mt-5 font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-sm transition duration-500 cursor-pointer">
                  Search Now
                </button>
                {/*--------icon--------*/}
                <div className="bg-gray-50/55 p-1.5 w-fit absolute top-0 right-0 shadow rounded-md">
                  <div className="bg-white p-1.5 w-fit rounded-md">
                    <FaHome
                      size={35}
                      className="bg-[#5582FF] p-2 rounded-sm text-white"
                    />
                  </div>
                </div>
              </div>
              {/*-----------Box--------2----------*/}
              <div className="bg-[#F3F4F6] p-3 rounded-t-full relative">
                <Image
                  src="/assets/aimgi-2.png"
                  alt="icons"
                  width={600}
                  height={400}
                  className="rounded-t-full"
                />
                <p className="text-sm text-[#4a5565] mt-5 text-center">
                  Luxry a Home
                </p>
                <button className="flex items-center justify-center m-auto text-sm mt-5 font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-sm transition duration-500 cursor-pointer">
                  Search Now
                </button>
                {/*--------icon--------*/}
                <div className="bg-gray-50/55 p-1.5 w-fit absolute top-0 right-0 shadow rounded-md">
                  <div className="bg-white p-1.5 w-fit rounded-md">
                    <FaHome
                      size={35}
                      className="bg-[#5582FF] p-2 rounded-sm text-white"
                    />
                  </div>
                </div>
              </div>
              {/*-----------Box--------3----------*/}
              <div className="bg-[#F3F4F6] p-3 rounded-t-full relative">
                <Image
                  src="/assets/aimgi-3.png"
                  alt="icons"
                  width={600}
                  height={400}
                  className="rounded-t-full"
                />
                <p className="text-sm text-[#4a5565] mt-5 text-center">
                  Delux a Home
                </p>
                <button className="flex items-center justify-center m-auto text-sm mt-5 font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-sm transition duration-500 cursor-pointer">
                  Search Now
                </button>
                {/*--------icon--------*/}
                <div className="bg-gray-50/55 p-1.5 w-fit absolute top-0 right-0 shadow rounded-md">
                  <div className="bg-white p-1.5 w-fit rounded-md">
                    <FaHome
                      size={35}
                      className="bg-[#5582FF] p-2 rounded-sm text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

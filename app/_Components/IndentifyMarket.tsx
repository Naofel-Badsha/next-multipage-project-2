import Image from "next/image";
import React from "react";
import { FaHandshake, FaMoneyBill } from "react-icons/fa";

const IndentifyMarket = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-2 items-center gap-20 py-24">
        {/*--------This is for Position--------*/}
        <div className="relative">
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
          {/*----------This for Image----------*/}
          <div className="right-0">
            <Image
              src="/assets/next-door31.png"
              alt="home images"
              width={600}
              height={600}
              className="object-cover object-center rounded-t-full p-4 bg-white shadow-2xl"
            />
          </div>
        </div>

        {/*------------Others Content------------*/}
        <div className="">
          <h1 className="text-5xl md:text-6xl lg:text-6.5xl font-semibold">
            Sell for more than the home{" "}
            <span className="text-[#4375FF]">Home</span> Next Door
          </h1>
          <p className="mt-9 text-lg ">
            Discover your dream property with our comprehensive search tools and
            expert guidance. Start your journey to finding the perfect place to
            call home.
          </p>

          <div className="mt-14">
            {/*---------Card Box------1-------*/}
            <div className="flex items-center justify-center gap-12">
              <div className="bg-[#F3F4F6] text-gray-800 shadow-2xl p-6 rounded-full hover:bg-[#4375FF] hover:text-white transition-all duration-300">
                <FaMoneyBill className="text-5xl" />
              </div>
              <div className="">
                <h3 className="text-[24px] font-medium">
                  The Ability to Indentify Market Entry
                </h3>
                <p className="text-[18px] mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  obcaecati dolorum aperiam quae assumenda laboriosam quis
                  debitis quisquam itaque adipisci.
                </p>
              </div>
            </div>
            {/*---------Card Box------2-------*/}
            <div className="flex items-center justify-center gap-12 mt-10">
              <div className="bg-[#F3F4F6] text-gray-800 shadow-2xl p-6 rounded-full hover:bg-[#4375FF] hover:text-white transition-all duration-300">
                <FaHandshake className="text-5xl" />
              </div>
              <div className="">
                <h3 className="text-[24px] font-medium">
                  The Ability to Indentify Market Entry
                </h3>
                <p className="text-[18px] mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  obcaecati dolorum aperiam quae assumenda laboriosam quis
                  debitis quisquam itaque adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndentifyMarket;

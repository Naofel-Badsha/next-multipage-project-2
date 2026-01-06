import Image from "next/image";
import React from "react";

const IndentifyMarket = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-2 gap-20 py-24">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
            Sell for more than the home <span className="text-[#4375FF]">Home</span> Next Door
          </h1>
          <p className="mt-9 text-lg text-[#4a5565]">
            Discover your dream property with our comprehensive search tools and
            expert guidance. Start your journey to finding the perfect place to
            call home.
          </p>

          <div className="">
            The Ability to Indentify Market Entry
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndentifyMarket;

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="text-7xl font-semibold">Find Your Perfect Home with <span>Ozalams</span></h1>
          <p>Discover your dream property with our comprehensive search tools and expert guidance. Start your journey to finding the perfect place to call home.</p>
          <div className="">
            <Image
              src="/assets/icon2.png"
              alt="icons"
              width={80}
              height={80}
            />
            <Image
              src="/assets/icon1.png"
              alt="icons"
              width={80}
              height={80}
            />
            <Image
              src="/assets/icon3.png"
              alt="icons"
              width={80}
              height={80}
            />
          </div>
          <div className="">
          <div className="mt-4 flex flex-col p-2">
            <div className="flex">
                <input type="text" placeholder="Enter location, propert" className="border rounded-md p-4 w-full"/>
                <button className="bg-blue-500 text-white rounded-md px-8 py-3 ">Search</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

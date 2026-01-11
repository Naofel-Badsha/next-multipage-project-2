import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-2 items-center gap-20 py-24">
        <div>
          <h1 className="text-5xl pt-4 text-black font-semibold text-[18px]">
            Our Story
          </h1>
          <p className="text-[#4a5565] mt-7 font-normal">
            Founded in 2018, Renthome started with a simple mission: to make
            finding and managing rental properties easier and more transparent
            for everyone.
          </p>
          <p className="text-[#4a5565] mt-5 font-normal">
            We leverage cutting-edge technology and a customer-first approach to
            simplify the rental process, providing innovative solutions that
            benefit both renters and property owners.
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
            src="/assets/main.jpg"
            alt="Story image"
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

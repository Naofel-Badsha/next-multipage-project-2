import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const categories = [
  {
    src: "/assets/category1.jpg",
    alt: "Bathroom Comfortable",
    title: "Bathroom Comfortable",
    className: "rounded-xl",
  },
  {
    src: "/assets/category2.jpg",
    alt: "Bathroom Comfortable",
    title: "Bathroom Comfortable",
    className: "rounded-xl",
  },
  {
    src: "/assets/category3.jpg",
    alt: "Bathroom Comfortable",
    title: "Bathroom Comfortable",
    className: "rounded-xl",
  },
  {
    src: "/assets/category4.jpg",
    alt: "Bathroom Comfortable",
    title: "Bathroom Comfortable",
    className: "rounded-xl",
  },
  {
    src: "/assets/category5.jpg",
    alt: "Bathroom Comfortable",
    title: "Bathroom Comfortable",
    className: "rounded-xl",
  },
  {
    src: "/assets/category6.jpg",
    alt: "Garden Items",
    title: "Garden Icon",
    className: "rounded-xl",
  },
];
const RoomQuality = () => {
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 items-center gap-20 py-24">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              {categories.map((categorie, index) => (
                <div key={index} className="">
                  <Image
                    src={categorie.src}
                    alt="Category Inages"
                    width={200}
                    height={200}
                    className={categorie.className}
                  />
                  <h2 className="text-center mt-4">{categorie.title}</h2>
                </div>
              ))}
            </div>
            {/*--------Search------Bar---------*/}
            <div className="mt-14">
              <div className="mt-4 flex flex-col p-2 bg-white shadow rounded-md">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Address, Schools City etc."
                    className="p-2 w-full focus:none outline-0"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-8 py-3">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/*-------Icon----Pointer---------*/}
            <div className="absolute right-10 top-80">
              <div className="w-40 space-y-5 bg-gray-100/70 p-3 rounded-lg">
                {/*--------Icon-----Box------1-------*/}
                <div className="flex gap-3 items-center justify-between p-3 bg-white rounded-lg">
                  <FaFacebook
                    size={35}
                    className="bg-[#5582FF] p-2 rounded-sm text-white"
                  />
                  Facebook
                </div>
                {/*--------Icon-----Box------2-------*/}
                <div className="flex gap-3 items-center justify-between p-3 bg-white rounded-lg">
                  <FaTwitter
                    size={35}
                    className="bg-[#5582FF] p-2 rounded-sm text-white"
                  />
                  Twitter
                </div>
                {/*--------Icon-----Box------3-------*/}
                <div className="flex gap-3 items-center justify-between p-3 bg-white rounded-lg">
                  <FaInstagram
                    size={35}
                    className="bg-[#5582FF] p-2 rounded-sm text-white"
                  />
                  Instagram
                </div>
                {/*--------Icon-----Box------4-------*/}
                <div className="flex gap-3 items-center justify-between p-3 bg-white rounded-lg">
                  <FaTelegram
                    size={35}
                    className="bg-[#5582FF] p-2 rounded-sm text-white"
                  />
                  Telegram
                </div>
              </div>
            </div>
            {/*----------This for Image----------*/}
            <div className="right-0">
              <Image
                src="/assets/next-door2.webp"
                alt="home images"
                width={600}
                height={600}
                className="object-cover object-center rounded-t-full p-4 bg-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomQuality;

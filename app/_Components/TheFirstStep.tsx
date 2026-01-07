import Image from "next/image";
import React from "react";
import { FaLocationArrow, FaToolbox } from "react-icons/fa";

const TheFirstStep = () => {
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5">
        <div className="py-24">
          {/*-------------Heading----Content----------------*/}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-semibold">
              Take The First <span className="text-[#4375FF]">Step</span>
            </h1>
            <p className="mt-9 text-lg text-[#4a5565]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, error.
            </p>
          </div>

          {/*---------Card--------Content---------*/}
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            {/*-----------Card--------1---------*/}
            <div className="bg-[#FFFFFF] p-7 rounded-2xl shadow-xl">
              <Image
                src="/assets/ab3.jpg"
                alt="card Imnages"
                width={400}
                height={400}
                className="rounded-xl"
              />
              <div className="flex items-center justify-between bg-[#F3F4F6] py-3 px-4 rounded-full mt-5">
                <Image
                  src="/assets/user.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full w-[35px] h-[35px] "
                />

                <p className="text-sm text-center">2K+ People Visited</p>
                <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-full transition duration-500 cursor-pointer">
                  Visit
                </button>
              </div>
              <div className="flex gap-3 items-center justify-between">
                {/*-----------InnerBox------1---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5 w-full">
                  <div className="text-center">
                    <FaLocationArrow
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Send Money
                    </h3>
                    <p className="text-black text-sm">Take Acc to Acc</p>
                  </div>
                </div>
                {/*-----------InnerBox------2---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5  w-full">
                  <div className="text-center">
                    <FaToolbox
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Pay The Bill
                    </h3>
                    <p className="text-black text-sm">Budget On Rent</p>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------Card--------2---------*/}
            <div className="bg-[#FFFFFF] p-7 rounded-2xl shadow-xl">
              <Image
                src="/assets/ab3.jpg"
                alt="card Imnages"
                width={400}
                height={400}
                className="rounded-xl"
              />
              <div className="flex items-center justify-between bg-[#F3F4F6] py-3 px-4 rounded-full mt-5">
                <Image
                  src="/assets/user.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full w-[35px] h-[35px] "
                />

                <p className="text-sm text-center">2K+ People Visited</p>
                <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-full transition duration-500 cursor-pointer">
                  Visit
                </button>
              </div>
              <div className="flex gap-3 items-center justify-between">
                {/*-----------InnerBox------1---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5 w-full">
                  <div className="text-center">
                    <FaLocationArrow
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Send Money
                    </h3>
                    <p className="text-black text-sm">Take Acc to Acc</p>
                  </div>
                </div>
                {/*-----------InnerBox------2---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5  w-full">
                  <div className="text-center">
                    <FaToolbox
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Pay The Bill
                    </h3>
                    <p className="text-black text-sm">Budget On Rent</p>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------Card--------3---------*/}
            <div className="bg-[#FFFFFF] p-7 rounded-2xl shadow-xl">
              <Image
                src="/assets/ab3.jpg"
                alt="card Imnages"
                width={400}
                height={400}
                className="rounded-xl"
              />
              <div className="flex items-center justify-between bg-[#F3F4F6] py-3 px-4 rounded-full mt-5">
                <Image
                  src="/assets/user.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full w-[35px] h-[35px] "
                />

                <p className="text-sm text-center">2K+ People Visited</p>
                <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-full transition duration-500 cursor-pointer">
                  Visit
                </button>
              </div>
              <div className="flex gap-3 items-center justify-between">
                {/*-----------InnerBox------1---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5 w-full">
                  <div className="text-center">
                    <FaLocationArrow
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Send Money
                    </h3>
                    <p className="text-black text-sm">Take Acc to Acc</p>
                  </div>
                </div>
                {/*-----------InnerBox------2---------*/}
                <div className="bg-[#F3F4F6] p-5 rounded-2xl mt-5  w-full">
                  <div className="text-center">
                    <FaToolbox
                      size={35}
                      className="bg-[#E5E7EB] p-2 rounded-sm text-black m-auto"
                    />
                    <h3 className="text-[18px] font-medium text-black mt-3">
                      Pay The Bill
                    </h3>
                    <p className="text-black text-sm">Budget On Rent</p>
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

export default TheFirstStep;

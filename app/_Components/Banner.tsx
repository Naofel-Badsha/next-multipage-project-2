import Image from "next/image";
import { FaHandshake } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-20 py-24">
          <div className="py-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
              Find Your Perfect <span className="text-[#4375FF]">Home</span>{" "}
              with Ozalams
            </h1>
            <p className="mt-9 text-lg text-[#4a5565]">
              Discover your dream property with our comprehensive search tools
              and expert guidance. Start your journey to finding the perfect
              place to call home.
            </p>
            <div className="flex item gap-10 mt-9 ">
              <div className="">
                <Image
                  src="/assets/icon2.png"
                  alt="icons"
                  width={80}
                  height={80}
                  className="transition hover:scale-125"
                />
                <p className="mt-4 text-sm text-[#4a5565]">Trusted Partner</p>
              </div>
              <div className="">
                <Image
                  src="/assets/icon1.png"
                  alt="icons"
                  width={80}
                  height={80}
                  className="transition hover:scale-125"
                />
                <p className="mt-4 text-sm text-[#4a5565]">Verified Listings</p>
              </div>
              <div className="">
                <Image
                  src="/assets/icon3.png"
                  alt="icons"
                  width={80}
                  height={80}
                  className="transition hover:scale-125"
                />
                <p className="mt-4 text-sm text-[#4a5565]">24/7 Support</p>
              </div>
            </div>
            {/*--------Search------Bar---------*/}
            <div className="mt-14">
              <div className="mt-4 flex flex-col p-2 bg-white shadow rounded-md">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter location, propert"
                    className="p-2 w-full focus:none outline-0"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-8 py-3 ">
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
            <div className="absolute right-10 top-50 md:top-80 lg:top-80">
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
            <div className="right-0">
              <Image
                src="/assets/main-home1.jpg"
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

export default Banner;

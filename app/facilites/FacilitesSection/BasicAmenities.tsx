import React from "react";
import { FaBuilding, FaLock } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { LuCircleParking } from "react-icons/lu";

const BasicAmenities = () => {
  const amenities = [
    {
      id: 1,
      icon: <IoWifi />,
      title: "High-Speed WiFi",
      description: "24/7 high-speed internet access throughout the property.",
    },
    {
      id: 2,
      icon: <LuCircleParking />,
      title: "Parking Space",
      description: "Dedicated parking spots for residents and guests.",
    },
    {
      id: 3,
      icon: <FaLock />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance.",
    },
    {
      id: 4,
      icon: <FaBuilding />,
      title: "Elevator Access",
      description: "Modern elevators for easy building access.",
    },
  ];
  return (
    <section className="container mx-auto px-5 py-24">
      <div className="">
        <h1 className="text-3xl pt-4 px-2 text-black font-bold ">
          Basic Amenities
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
          {amenities.map((amenitie) => {
            return (
              <div
                key={amenitie.id}
                className="bg-white p-6 shadow hover:shadow-xl rounded-xl space-y-7 border"
              >
                <div className="bg-[#ECF1FF] p-4 w-fit flex items-center justify-center rounded-full">
                  <span className="text-blue-500 text-2xl">
                    {amenitie.icon}
                  </span>
                </div>

                <h1 className="text-xl font-medium mt-6">{amenitie.title}</h1>
                <p>{amenitie.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BasicAmenities;

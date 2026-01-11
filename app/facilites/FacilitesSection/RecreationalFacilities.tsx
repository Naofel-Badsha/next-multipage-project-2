import React from 'react';
import { FaDumbbell, FaSwimmingPool } from 'react-icons/fa';
import { LuCoffee } from 'react-icons/lu';
import { MdLiveTv } from 'react-icons/md';

const RecreationalFacilities = () => {
      const facilities = [
        {
          id: 1,
          icon: <FaSwimmingPool />,
          title: "Swimming Pool",
          description: "Infinity pool with panoramic city views.",
        },
        {
          id: 2,
          icon: <FaDumbbell />,
          title: "Fitness Center",
          description: "Fully equipped gym with modern equipment.",
        },
        {
          id: 3,
          icon: <MdLiveTv />,
          title: "Entertainment Room",
          description: "Common area with large TV and gaming consoles.",
        },
        {
          id: 4,
          icon: <LuCoffee />,
          title: "Café Lounge",
          description: "Cozy café area for social gatherings.",
        },
      ];
    return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-3xl pt-4 px-2 text-black font-bold ">
          Recreational Facilities
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
          {facilities.map((facilitie) => {
            return (
              <div
                key={facilitie.id}
                className="bg-white p-6 shadow hover:shadow-xl rounded-xl space-y-7 border"
              >
                <div className="bg-[#ECF1FF] p-4 w-fit flex items-center justify-center rounded-full">
                  <span className="text-blue-500 text-2xl">{facilitie.icon}</span>
                </div>

                <h1 className="text-xl font-medium mt-6">{facilitie.title}</h1>
                <p>{facilitie.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default RecreationalFacilities;
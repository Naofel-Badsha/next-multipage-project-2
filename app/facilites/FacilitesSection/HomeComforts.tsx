import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { MdDinnerDining, MdOutlineLocalLaundryService } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";

const HomeComforts = () => {
  const comforts = [
    {
      id: 1,
      icon: <FaKitchenSet />,
      title: "Modern Kitchen",
      description: "Fully equipped kitchen with premium appliances.",
    },
    {
      id: 2,
      icon: <MdOutlineLocalLaundryService />,
      title: "Laundry Room",
      description: "In-unit laundry facilities.",
    },
    {
      id: 3,
      icon: <TbAirConditioning />,
      title: "Air Conditioning",
      description: "Central air conditioning system.",
    },
    {
      id: 4,
      icon: <MdDinnerDining />,
      title: "Dining Area",
      description: "Spacious dining area for family gatherings.",
    },
  ];
  return (
    <section className="container mx-auto px-5 py-24">
      <div className="">
        <h1 className="text-3xl pt-4 px-2 text-black font-bold ">
        Home Comforts
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
          {comforts.map((comfort) => {
            return (
              <div
                key={comfort.id}
                className="bg-white p-6 shadow hover:shadow-xl rounded-xl space-y-7 border"
              >
                <div className="bg-[#ECF1FF] p-4 w-fit flex items-center justify-center rounded-full">
                  <span className="text-blue-500 text-2xl">
                    {comfort.icon}
                  </span>
                </div>

                <h1 className="text-xl font-medium mt-6">{comfort.title}</h1>
                <p>{comfort.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeComforts;

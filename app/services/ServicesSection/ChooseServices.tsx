import Image from "next/image";
import React from "react";
import { FaBuilding, FaIdBadge } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const ChooseServices = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-2 items-center gap-20 py-24">
        <div>
          <h1 className="text-4xl  pt-4 px-2 text-black font-bold ">
            Why Choose Our Services?
          </h1>
          {/*--------Icon------1------*/}
          <div className="flex items-center  gap-5 mt-5">
            <div className="bg-[#ECF1FF] p-3 w-[50px] h-[50px] flex items-center justify-center rounded-sm">
              <FaBuilding className="text-blue-500 text-2xl " />
            </div>
            <div>
              <h1 className="text-xl font-medium mt-6">
                Extensive Property Network
              </h1>
              <p className="text-[16px] mt-1">
                Access to a wide range of properties across multiple locations
              </p>
            </div>
          </div>
          {/*--------Icon------2------*/}
          <div className="flex items-center  gap-5 mt-5">
            <div className="bg-[#ECF1FF] p-3 w-[50px] h-[50px] flex items-center justify-center rounded-sm">
              <FaUserGroup className="text-blue-500 text-2xl " />
            </div>
            <div>
              <h1 className="text-xl font-medium mt-6">Expert Support Team</h1>
              <p className="text-[16px] mt-1">
                Dedicated professionals ready to assist you at every step
              </p>
            </div>
          </div>
          {/*--------Icon------3------*/}
          <div className="flex items-center  gap-5 mt-5">
            <div className="bg-[#ECF1FF] p-3 w-[50px] h-[50px] flex items-center justify-center rounded-sm">
              <FaIdBadge className="text-blue-500 text-2xl " />
            </div>
            <div>
              <h1 className="text-xl font-medium mt-6">Secure Transactions</h1>
              <p className="text-[16px] mt-1">
                Safe and protected payment processing for all transactions
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/assets/services-img.jpg"
            alt="Story image"
            width={600}
            height={600}
            className="rounded-xl w-[600px] h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseServices;

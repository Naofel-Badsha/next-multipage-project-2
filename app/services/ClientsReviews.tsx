import Image from "next/image";
import React from "react";

const ClientsReviews = () => {
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD] px-5">
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-24">
        {/*------Review-----1--------*/}
        <div className="rounded-2xl bg-white p-6 shadow border hover:shadow-xl">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/team1.jpg"
              alt="John Smith"
              width={56}
              height={56}
              className="rounded-full w-[60px] h-[60px] object-cover border border-blue-700"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                John Smith
              </h4>
              <p className="text-sm text-gray-500">Property Owner</p>
            </div>
          </div>
          {/*---------Rating-----------*/}
          <div className="mt-4 flex  text-3xl text-yellow-400">★★★★★</div>

          {/*--------Review text-------------*/}
          <p className="mt-4 text-gray-600 leading-relaxed">
            RentHome has transformed how I manage my properties. Their service
            is exceptional!
          </p>
        </div>
        {/*------Review-----2--------*/}
        <div className="rounded-2xl bg-white p-6 shadow border hover:shadow-xl">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/team2.jpg"
              alt="John Smith"
              width={56}
              height={56}
              className="rounded-full w-[60px] h-[60px] object-cover border border-blue-700"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                John Smith
              </h4>
              <p className="text-sm text-gray-500">Property Owner</p>
            </div>
          </div>
          {/*---------Rating-----------*/}
          <div className="mt-4 flex  text-3xl text-yellow-400">★★★★★</div>

          {/*--------Review text-------------*/}
          <p className="mt-4 text-gray-600 leading-relaxed">
            RentHome has transformed how I manage my properties. Their service
            is exceptional!
          </p>
        </div>
        {/*------Review-----3--------*/}
        <div className="rounded-2xl bg-white p-6 shadow border hover:shadow-xl">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/team3.jpg"
              alt="John Smith"
              width={56}
              height={56}
              className="rounded-full w-[60px] h-[60px] object-cover border border-blue-700"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                John Smith
              </h4>
              <p className="text-sm text-gray-500">Property Owner</p>
            </div>
          </div>
          {/*---------Rating-----------*/}
          <div className="mt-4 flex  text-3xl text-yellow-400">★★★★★</div>

          {/*--------Review text-------------*/}
          <p className="mt-4 text-gray-600 leading-relaxed">
            RentHome has transformed how I manage my properties. Their service
            is exceptional!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;

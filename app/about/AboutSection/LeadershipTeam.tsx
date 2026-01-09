import Image from "next/image";
import React from "react";

const LeadershipTeam = () => {
    const leaders = [
        {
            id: 1,
            name: "Sarah Johnson",
            postition: "Founder & CEO",
            constent: "10+ years of experience in real estate and property management",
            img: ""
        }
    ]


  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5 py-24">
        <div className="">
          <h1 className="text-5xl pt-4 px-2 text-black font-semibold ">
            Our Leadership Team
          </h1>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-25">
            {/*---------Card------1----------*/}
            <div className="p-7 shadow bg-white rounded-2xl hover:shadow-2xl/5">
                <Image src="/assets/team1.jpg" alt="" width={500} height={500} className="w-[200px] h-[200px] object-cover rounded-full m-auto"/>
                <h1 className="text-xl text-black mt-6 text-center">Sarah Johnson</h1>
                <h3 className="text-md text-blue-500 mt-4 text-center">Founder & CEO</h3>
                <p className="text-[16px] text-black text-center mt-5">10+ years of experience in real estate and property management</p>
            </div>
            {/*---------Card------2----------*/}
            <div className="p-7 shadow bg-white rounded-2xl hover:shadow-2xl/5">
                <Image src="/assets/team2.jpg" alt="" width={500} height={500} className="w-[200px] h-[200px] object-cover rounded-full m-auto"/>
                <h1 className="text-xl text-black mt-6 text-center">Sarah Johnson</h1>
                <h3 className="text-md text-blue-500 mt-4 text-center">Founder & CEO</h3>
                <p className="text-[16px] text-black text-center mt-5">10+ years of experience in real estate and property management</p>
            </div>
            {/*---------Card------3----------*/}
            <div className="p-7 shadow bg-white rounded-2xl hover:shadow-2xl/5">
                <Image src="/assets/team3.jpg" alt="" width={500} height={500} className="w-[200px] h-[200px] object-cover rounded-full m-auto"/>
                <h1 className="text-xl text-black mt-6 text-center">Sarah Johnson</h1>
                <h3 className="text-md text-blue-500 mt-4 text-center">Founder & CEO</h3>
                <p className="text-[16px] text-black text-center mt-5">10+ years of experience in real estate and property management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

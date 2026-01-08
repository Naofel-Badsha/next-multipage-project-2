import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/*------------Logo & About-------------*/}
        <div>
          <Image
            src="/assets/logo.png"
            alt="RentHome Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
            laboriosam labore velit accusantium culpa, assumenda est, dolorum
            nihil nulla iusto similique odio beatae officia, temporibus dicta
            voluptates aliquam accusamus.
          </p>
        </div>

        {/*--------------Quick Links-----------------*/}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*-------------Contact / Social-------------*/}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-600">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Youtube
              </a>
            </li>
          </ul>
        </div>

        {/*-------------Updates---------------*/}
        <div className="space-y-4">
          {/*---------------Item-------1-------------*/}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/ab1.png"
              alt="Update"
              width={55}
              height={55}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Here are updates</p>
              <span className="text-xs text-gray-500">
                Lorem Ipsum Dolor Sit
              </span>
            </div>
          </div>
          {/*---------------Item-------2-------------*/}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/ab2.jpg"
              alt="Update"
              width={55}
              height={55}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Here are updates</p>
              <span className="text-xs text-gray-500">
                Lorem Ipsum Dolor Sit
              </span>
            </div>
          </div>
          {/*---------------Item-------3-------------*/}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/ab3.jpg"
              alt="Update"
              width={55}
              height={55}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Here are updates</p>
              <span className="text-xs text-gray-500">
                Lorem Ipsum Dolor Sit
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 Real Estate. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Fb
            </a>
            <a href="#" className="hover:text-blue-600">
              Tw
            </a>
            <a href="#" className="hover:text-blue-600">
              In
            </a>
            <a href="#" className="hover:text-blue-600">
              Ln
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

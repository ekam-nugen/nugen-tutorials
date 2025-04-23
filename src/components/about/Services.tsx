"use client";
import { servicesData } from "@/src/json/aboutUs/aboutUs";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-white via-[#fff1eb] to-white py-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empower Your Skills with Expert-Led Training
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <h3 className="text-xl md:text-2xl text-gray-600">
            Our hands-on training programs are tailored to help you master
            real-world tech skills and launch your digital career with
            confidence.
          </h3>
          <a
            href="#"
            className="inline-block mt-6  font-medium py-2 px-6 rounded-lg hover:bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 hover:text-white bg-white text-gray-800 duration-300"
          >
            Explore Our Traning Programs
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative w-full max-w-sm mx-auto h-64 perspective cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-200 rounded-lg w-full shadow-xl p-6 flex items-center justify-center backface-hidden">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg
                        className="w-12 h-12 mx-auto text-[#ffbb9f]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={service.iconPath}
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff1eb] to-white  text-gray-800 rounded-lg shadow-xl p-6 flex items-center justify-center backface-hidden rotate-y-180">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">
                      Why Choose Us?
                    </h3>
                    <ul className="text-base space-y-3 mb-6">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <button className=" hover:bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 hover:text-white bg-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;

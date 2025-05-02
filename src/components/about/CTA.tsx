import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/src/json/aboutUs/aboutUs";

const IndustriesWeEmpower = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#fff1eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 text-black tracking-tight">
          Industries We Empower
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 justify-center">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="flex justify-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="bg-white rounded-2xl w-full max-w-[480px] shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 sm:p-8 border border-[#ffe8dc]">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    width={100}
                    height={100}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-black tracking-tight">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12 xl:mt-16 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center hover:bg-gradient-to-r from-orange-400 to-purple-500 hover:text-white bg-white text-black text-sm sm:text-base lg:text-lg font-semibold py-2.5 sm:py-3 lg:py-4 px-5 sm:px-6 lg:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            data-bookctablock="Get In Touch With Us - Industries We Empower"
          >
            Get In Touch With Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeEmpower;

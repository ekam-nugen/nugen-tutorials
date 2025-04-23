import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutUsData } from "@/src/json/aboutUs/aboutUs";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Supercharge{" "}
            <span className="text-[#ffbb9f]">Nugen I.T Services</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
            your business with our{" "}
            <span className="block md:inline">
              Staff Augmentation solutions for
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {aboutUsData?.map((service, index) => (
              <Link
                key={index}
                href="#services"
                className={`px-6 py-3 border-l-4 ${service?.color} text-gray-800 font-medium hover:bg-slate-100 rounded-lg transition-colors duration-200`}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 hover:bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 hover:text-white bg-white text-gray-800  font-semibold rounded-lg  duration-200"
          >
            Get In Touch With Us
            <ArrowRight className="ml-2" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

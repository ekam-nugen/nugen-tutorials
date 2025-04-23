import React from "react";
import Image from "next/image";
import GraphicCards from "../../../public/graphicCards.png";

const CompanyOverview = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, Nugeninfo is a global leader in software
            development, delivering cutting-edge solutions to businesses
            worldwide. Our mission is to empower enterprises with innovative
            technology that drives growth and efficiency.
          </p>
          <p className="text-gray-600">
            With over 200 professionals across 5 countries, we’ve delivered 500+
            projects for clients in industries like finance, healthcare, and
            e-commerce.
          </p>
        </div>
        <div className="relative h-64 md:h-96">
          <Image
            src={GraphicCards}
            alt="Nugeninfo Team"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;

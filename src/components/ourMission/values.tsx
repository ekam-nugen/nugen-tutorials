import React, { JSX } from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaLifeRing,
  FaServer,
  FaHandshake,
} from "react-icons/fa";

interface ServiceValue {
  icon: JSX.Element;
  title: string;
  description: string;
}

const serviceValues: ServiceValue[] = [
  {
    icon: <FaShieldAlt className="text-white text-2xl" />,
    title: "Security",
    description:
      "We prioritize the protection of your data and systems with cutting-edge cybersecurity measures.",
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Innovation",
    description:
      "We leverage the latest technologies to deliver forward-thinking IT solutions tailored to your business.",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Efficiency",
    description:
      "Our optimized processes and automation tools help you achieve maximum productivity with minimal downtime.",
  },
  {
    icon: <FaServer className="text-white text-2xl" />,
    title: "Scalability",
    description:
      "We design infrastructures that grow with your business, ensuring seamless expansion and performance.",
  },
  {
    icon: <FaLifeRing className="text-white text-2xl" />,
    title: "Support",
    description:
      "Our dedicated team provides 24/7 monitoring and responsive assistance to keep your operations running smoothly.",
  },
  {
    icon: <FaHandshake className="text-white text-2xl" />,
    title: "Partnership",
    description:
      "We work closely with you as a strategic partner to align IT goals with your business objectives.",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-[#fff1eb] to-[#ffdde1] cursor-pointer py-20 px-6">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-3">Our <span className="text-[#f37458]">Core</span> Values</h2>
        <div className="w-24 h-1 bg-[#f37458] mx-auto mb-12 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {serviceValues.map((value, idx) => (
          <div
            key={idx}
            className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f37458] mb-4">
              {value.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-700 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;

import {
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  Backpack,
  BadgeDollarSign,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: GraduationCap,
    title: "Personalized Mentorship",
    description: "Focused guidance from seasoned experts",
  },
  {
    icon: Building2,
    title: "Real-world Project",
    description: "Hands-on work on a live project",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-driven Curriculum",
    description: "Based on technologies shaping different sectors",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Support",
    description: "Dedicated assistance in your professional journey",
  },
  {
    icon: Backpack,
    title: "Individualized Learning Experience",
    description: "Training crafted as per your suitability",
  },
  {
    icon: BadgeDollarSign,
    title: "Exclusive Job Opportunities",
    description: "Top performers gain priority access to placements",
  },
];

export default function CourseFeatures() {
  return (
    <section className="bg-gradient-to-r from-white via-[#fff1eb] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col cursor-pointer  lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h4 className="uppercase text-sm tracking-widest text-black mb-2">
            About
          </h4>
          <h2 className="text-4xl font-bold text-[#f37458] mb-4">
            <span className="text-black">Course</span> Features
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our front-end developer course curriculum, curated by experienced
            industry experts, emphasises on making you a versatile professional
            ready to tackle the challenges of the evolving digital landscape.
            Through this course, you will obtain the skills and information
            necessary to succeed in the fast-paced world of front-end
            development, regardless of your experience.
          </p>
          <Image
             width={500}
             height={500}
              src="/featureSection.webp"
              alt="Course Illustration"
              className="w-full max-w-lg object-contain"
            />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 grid grid-cols-1 cursor-pointer sm:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="group bg-white hover:bg-[#fff1eb] cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl p-5 hover:border hover:border-[#f37458] flex gap-4 items-start relative overflow-hidden"
            >
              {/* Gradient circle */}
              <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              {/* Icon Container */}
              <div className="bg-white rounded-full shadow-md p-3 transition duration-300 group-hover:bg-white group-hover:shadow-none">
                <Icon className="w-6 h-6 text-[#f37458]  transition duration-300" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-800 text-lg transition duration-300">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 transition duration-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

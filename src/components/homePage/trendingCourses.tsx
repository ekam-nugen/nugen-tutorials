import React from "react";
import Image from "next/image";

interface Program {
  name: string;
  duration: string;
  startDate: string;
  image: string;
  onclick?:()=> void;
}

const trendingCoursesData: Program[] = [
  {
    name: "PMP® Certification Training",
    duration: "4 Weeks",
    startDate: "22nd Apr '25",
    image: "/project-management.jpg",
  },
  {
    name: "Advanced Executive Program in Cybersecurity",
    duration: "6 Months",
    startDate: "23rd Apr '25",
    image: "/cyberSecurity.jpg",
  },
  {
    name: "Certified ScrumMaster® (CSM)",
    duration: "3 Days",
    startDate: "23rd Apr '25",
    image: "/scrum.jpg",
    onclick: () => ("/scrumCourses"),
  },
  {
    name: "Professional Certificate Course in Generative AI and Machine Learning",
    duration: "11 Months",
    startDate: "29th Apr '25",
    image: "/ai_ml.jpg",
  },
];

export default function TrendingCourses() {
  return (
    <section className="bg-gradient-to-br from-white via-[#fff9f7] to-[#ffece4] py-16 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1f1f1f] mb-14">
        Trending <span className="text-[#ff6b3d]">Courses</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingCoursesData?.map((program) => (
          <div
            key={program.name}
            className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:border-[#ff6b3d]/50 hover:bg-[#fff5f0]"
          >
            <div>
              <div className="h-40 w-full mb-5 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={program.image}
                  alt={program.name}
                  width={500}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-[#1f1f1f] mb-2 leading-snug line-clamp-2">
                {program.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Duration:</strong> {program.duration}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Cohort Starts:</strong> {program.startDate}
              </p>
            </div>
            <button className="w-full mt-auto py-2.5 bg-[#ff6b3d] text-white font-semibold rounded-lg hover:bg-[#ff5c2a] transition-all shadow-md">
              View Program
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

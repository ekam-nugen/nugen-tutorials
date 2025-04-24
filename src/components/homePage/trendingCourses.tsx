import React from 'react';
import Image from 'next/image'; 

interface Program {
    name: string;
    duration: string;
    startDate: string;
    image: string;
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
    },
    {
        name: "Professional Certificate Course in Generative AI and Machine Learning",
        duration: "11 Months",
        startDate: "29th Apr '25",
        image: "/ai_ml.jpg",
    },
]

export default function TrendingCourses() {
    return (
        <div className="bg-gradient-to-br from-white cursor-pointer via-[#fff9f7] to-[#ffece4] min-h-screen p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-14 text-[#1f1f1f]">
                Trending <span className="text-[#ff6b3d]">Courses</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingCoursesData?.map((program: Program) => (
                    <div
                        key={program.name}
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.015] hover:border-[#ff6b3d]/40 hover:bg-[#fff6f2]"
                    >
                        <Image
                            width={500}
                            height={500}
                            src={program.image}
                            alt={program.name}
                            className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm"
                        />
                        <h2 className="text-xl font-semibold text-[#1f1f1f] mb-3">
                            {program.name}
                        </h2>
                        <p className="text-sm text-gray-700 mb-1">
                            Duration:
                            <span className="font-medium"> {program.duration}</span>
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                            Cohort Starts:
                            <span className="font-medium"> {program.startDate}</span>
                        </p>
                        <button className="w-full py-2 bg-[#ff6b3d] text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md">
                            View Program
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
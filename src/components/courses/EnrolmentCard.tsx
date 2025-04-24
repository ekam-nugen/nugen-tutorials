'use client';

import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnrolmentCard() {
    const router = useRouter();
    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-white to-gray-200 px-4">
            <div className="relative p-10 md:p-14 bg-gradient-to-br from-white via-[#fff1eb] to-white rounded-3xl  max-w-6xl w-full text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6 animate-float">
                    <FileText size={96} strokeWidth={1.4} className="text-[#f37458]" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f2b3d] mb-4 leading-tight">
                    Enrolment Requirements
                </h2>

                {/* Description */}
                <p className="text-[#2d3b4f] text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                    Nugen offers direct registration for its <strong>Certified Frontend Developer Course</strong>. No application is needed — simply enroll and start your journey today.
                </p>

                {/* Button */}
                <button className="group relative inline-flex items-center justify-center px-7 cursor-pointer py-3 rounded-full font-semibold  bg-gradient-to-r shadow-sm from-orange-400 to-purple-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none overflow-hidden" onClick={() => router.push("/contactUs")}>
                    <span className="z-10 relative">→ Enroll Now</span>
                </button>
            </div>
        </div>
    );
}

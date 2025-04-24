'use client';

import { FileText } from "lucide-react";

export default function EnrolmentCard() {
    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-white to-gray-200 px-4">
            <div
                className="p-10 bg-gradient-to-br from-[#fff6f2] to-[#fdeae2]   rounded-2xl shadow-xl max-w-4xl text-center transition-shadow duration-300"
            >
                <div className="flex justify-center mb-6">
                    <FileText size={120} strokeWidth={1} className="text-[#f37458]" />
                </div>

                <h2 className="text-2xl md:text-4xl font-bold text-[#333b47] mb-4">
                    Enrolment Requirements
                </h2>

                <p className="text-[#323c49]  text-base md:text-lg mb-8 leading-relaxed">
                    Nugen offers direct registration for its Certified Frontend Developer Course.
                    No application is needed; you can simply enroll and begin your journey right away.
                </p>

                <button
                    className="bg-gradient-to-r shadow-sm from-orange-400 to-purple-400 text-white font-semibold py-2 px-5 rounded-full cursor-pointer"
                >
                    → Enroll Now
                </button>
            </div>
        </div>
    );
}

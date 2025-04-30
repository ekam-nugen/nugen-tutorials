"use client";

import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnrollmentCard() {
  const router = useRouter();
  return (
    <section className="relative flex justify-center items-center py-10 bg-gradient-to-br from-white via-white to-gray-100 px-4">
      <div className="bg-gradient-to-r from-[#ef9078] to-[#feb47b] p-6 rounded-xl text-white text-center shadow-inner">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6 animate-float">
            <FileText size={96} strokeWidth={1.2} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enrollment Requirements
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Unlock your potential with{" "}
            <strong>Nugen’s Certified Developer Courses</strong>. Skip the lengthy
            applications — enroll instantly and kickstart your journey toward a
            thriving career today!
          </p>
          <button
            onClick={() => router.push("/contactUs")}
            className="bg-white text-[#ff5f6d] font-bold py-3 px-8 rounded-full hover:bg-gray-100 cursor-pointer transition"
          >
            → Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}

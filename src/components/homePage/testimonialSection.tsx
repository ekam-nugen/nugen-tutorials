"use client";

import Image from "next/image";
import google from "../../../public/award-logo-1.svg";
import trustpilot from "../../../public/trustpilot-logo.png";
import Link from "next/link";
import { TESTIMONOAL_DATA_ONE, TESTIMONOAL_DATA_TWO } from "@/src/json/reviews/reviews";

export default function ShowReviewsPage() {
  const allTestimonials = [...TESTIMONOAL_DATA_ONE, ...TESTIMONOAL_DATA_TWO];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-orange-100 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Nugen It Service
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          Hear what our clients have to say about their experience at
          <span className="font-semibold text-pink-500">Nugen</span>!
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {allTestimonials.map((review, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 relative border border-white/40 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.imageURL}
                  height={100}
                  width={100}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-base">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.source}</p>
                </div>
                <div className="ml-auto">{review.icon}</div>
              </div>

              <div className="flex items-center mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-lg drop-shadow-sm"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Review Logos */}
        <div className="text-center mt-10">
          <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
            <Image src={google} alt="Google" width={100} height={35} />
            <Image src={trustpilot} alt="Trustpilot" width={100} height={35} />
          </div>
        </div>
        <div className="mt-16">
          <Link href="/contact-us" className="cursor-pointer bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-10 py-4 rounded-full text-lg shadow-xl font-semibold transform transition-transform duration-300 hover:scale-105">
            Share Your Story
          </Link>
        </div>
      </div>
    </section>
  );
}

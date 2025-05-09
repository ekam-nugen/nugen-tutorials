import Image from "next/image";
import Link from "next/link";
import { TESTIMONOAL_DATA_ONE } from "@/src/json/reviews/reviews";

interface TestimonialStaticProps {
  className?: string;
}

export default function TestimonialStatic({
  className,
}: TestimonialStaticProps) {
  return (
    <section
      className={`py-16 text-black bg-gradient-to-br from-white via-[#fff9f7] to-[#ffece4] ${className}`}
    >
      <div className="text-center mb-10">
        <div className="text-yellow-400 text-3xl mb-2">★★★★★</div>
        <h2 className="text-3xl font-semibold">What Our Students Say</h2>
        <p className="text-lg mt-2">
          Real success stories from professionals who have advanced their
          careers with our training.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {TESTIMONOAL_DATA_ONE.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff6b3d]">
                <Image src={t.imageURL} alt={t.name} width={48} height={48} />
              </div>
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-xs text-black capitalize">{t.source}</p>
              </div>
            </div>
            <p className="text-md italic text-[#2b2b2b]">
              &quot;{t.text}&quot;
            </p>
            <div className="text-[#ff6b3d] text-3xl absolute bottom-4 right-4">
              ”
            </div>
          </div>
        ))}
      </div>

      {/* Review Logos */}
      <div className="text-center mt-10">
        <Link
          href="/review"
          className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-10 py-4 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 text-sm font-medium"
        >
          Read More Reviews
          <svg
            width="16"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            className="inline-block ml-1"
          >
            <path
              d="M22.7071 8.7071C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928931C15.9526 0.538406 15.3195 0.538406 14.9289 0.928931C14.5384 1.31946 14.5384 1.95262 14.9289 2.34314L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.7071ZM8.74228e-08 9L22 9L22 7L-8.74228e-08 7L8.74228e-08 9Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <Image src="/award-logo-1.svg" alt="Google" width={100} height={35} />
          <Image
            src="/trustpilot-logo.png"
            alt="Trustpilot"
            width={100}
            height={35}
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";

const OurStrength: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFDCD2] to-white py-24 px-6 text-center">
      {/* Decorative Blob SVG */}
      <svg
        className="absolute top-[-80px] left-[-80px] w-96 h-96 opacity-10 -z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFB199"
          d="M48.5,-51.4C63.2,-36.1,75.5,-18.1,73.8,-2C72.1,14.1,56.4,28.2,41.8,43.8C27.2,59.3,13.6,76.3,-3.3,79.1C-20.1,81.8,-40.1,70.2,-52.1,54.7C-64.1,39.2,-68.2,19.6,-65.2,2.1C-62.3,-15.5,-52.3,-31,-39.7,-45.3C-27.1,-59.7,-13.6,-72.9,2.3,-75.3C18.2,-77.7,36.3,-69.2,48.5,-51.4Z"
        />
      </svg>

      <div className="max-w-screen-md mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 inline-block relative">
          Our <span className="text-[#f37458]">Strength</span>
          <span className="block h-1 w-16 bg-[#f37458] mx-auto mt-2 rounded-full" />
        </h2>

        <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
          At <strong className="text-[#f37458]">Nugen IT Services</strong>, we’re dedicated to driving innovation and excellence across the digital landscape.
        </p>

        <p className="text-base md:text-lg text-black leading-loose mb-6">
          With a deep-rooted expertise in modern web technologies, cloud infrastructure, and cutting-edge enterprise solutions,
          we empower businesses to thrive in a rapidly evolving tech ecosystem. Our collaborative approach with industry leaders
          and academic institutions ensures we deliver best-in-class services that are scalable, secure, and future-ready.
        </p>

        <p className="text-base md:text-lg text-black font-medium">
          Join hands with Nugen to explore transformative digital solutions and stay ahead in the competitive world of technology.
        </p>
      </div>

      {/* Bottom Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFDCD2"
          d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,149.3C672,139,768,85,864,90.7C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default OurStrength;

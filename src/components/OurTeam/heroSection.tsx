import React from "react";

const TeamHero = () => {
  return (
    <>
      <section className="relative py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet Our Expert Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            At Nugen I.T. Services, our passionate developers leverage
            cutting-edge technologies to drive digital transformation and
            deliver innovative solutions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-white via-[#fff1eb] to-white rounded-t-[50%]"></div>
      </section>
    </>
  );
};

export default TeamHero;
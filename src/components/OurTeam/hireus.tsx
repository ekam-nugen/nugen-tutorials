"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HireUsPage() {
  const services = [
    { title: "Web Development", icon: "🌐" },
    { title: "Mobile Apps", icon: "📱" },
    { title: "UI/UX Design", icon: "🎨" },
    { title: "AI & ML Integration", icon: "🤖" },
    { title: "Dedicated Developers", icon: "👨‍💻" },
    { title: "Project Rescue", icon: "🚑" },
  ];

  const stats = [
    { value: "300+", label: "5-Star Reviews" },
    { value: "10+", label: "Years Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote:
        "Nugen transformed our digital presence. Their team was responsive and delivered beyond expectations.",
      name: "Jane Doe",
      position: "CTO, TechCorp",
    },
    {
      quote:
        "The collaboration with Nugen was seamless. Their expertise in AI integration is top-notch.",
      name: "John Smith",
      position: "CEO, InnovateX",
    },
  ];

  return (
    <div className="text-[#1A1A1A] font-sans bg-white relative">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-tr from-[#FFF4F2] to-[#FFE9E6] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hire a <span className="text-[#FF5E62]">Remote Tech Team</span>
          </h1>
          <p className="text-lg text-[#555] mt-4 max-w-2xl mx-auto">
            Full-stack developers, UI/UX designers, and AI engineers to scale
            your vision fast.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-[#FF5E62] to-[#FF9966] text-white text-lg rounded-full font-semibold shadow-lg transition-all"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ title, icon }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FFF4F2] p-6 rounded-2xl text-center shadow-md"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-[#FFE9E6]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className=""
            >
              <h3 className="text-4xl font-bold text-[#FF5E62]">{value}</h3>
              <p className="text-[#666] mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, name, position }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-[#FFF4F2] p-6 rounded-xl shadow"
              >
                <p className="italic text-[#444]">&quot;{quote}&quot;</p>
                <div className="mt-4 text-[#FF5E62] font-semibold">{name}</div>
                <div className="text-[#888] text-sm">{position}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#FFF4F2] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-[#666] mb-8">
            Fill out the form or book a quick 15-minute discovery call.
          </p>
          <form className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Company / Website"
              className="border border-gray-300 p-3 rounded md:col-span-2"
            />
            <textarea
              placeholder="Project Details"
              rows={4}
              className="border border-gray-300 p-3 rounded md:col-span-2"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#FF5E62] to-[#FF9966] text-white font-semibold py-3 px-6 rounded-full md:col-span-2 shadow hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Floating CTA */}
      {/* <div className="fixed bottom-5 right-5 z-50">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#"
          className="bg-gradient-to-r from-[#FF5E62] to-[#FF9966] text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold"
        >
          💬 Get a Quote
        </motion.a>
      </div> */}
    </div>
  );
}

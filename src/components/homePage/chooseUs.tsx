"use client";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Headset,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Custom Software Development",
    desc: "Tailored digital solutions built to meet your business needs and scale efficiently.",
  },
  {
    icon: <Network size={28} />,
    title: "Robust Infrastructure",
    desc: "Leverage secure, scalable, and reliable IT infrastructure for seamless operations.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI & Automation",
    desc: "Optimize workflows with intelligent automation and data-driven insights.",
  },
  {
    icon: <Server size={28} />,
    title: "Cloud Solutions",
    desc: "Deploy powerful cloud strategies to enhance agility and reduce overhead.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Team",
    desc: "Collaborate with a seasoned team of IT professionals and certified engineers.",
  },
  {
    icon: <Headset size={28} />,
    title: "24/7 Support",
    desc: "Round-the-clock technical support to keep your systems up and running.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Cybersecurity First",
    desc: "Advanced security frameworks to protect your data and ensure compliance.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Future-Ready Tech",
    desc: "Stay ahead with cutting-edge tech adoption and innovation-focused solutions.",
  },
];

export default function WhyNugenIT() {
  return (
    <section className="relative bg-gradient-to-br from-[#fff6f0] via-[#fffaf6] to-[#fffcf9] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why <span className="text-[#ff6b3d]">Nugen IT Services</span>
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-3">
            <li>
              Serving businesses with innovative IT solutions for over a decade.
            </li>
            <li>
              Delivered 1000+ successful projects across multiple industries.
            </li>
            <li>Agile methodology for fast, flexible development cycles.</li>
            <li>Real-world implementation of AI, ML, and IoT systems.</li>
            <li>
              Client-first approach with a focus on long-term partnerships.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="bg-white/70 backdrop-blur-lg border border-orange-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#ff6b3d]">{f.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">
                  {f.title}
                </h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 cursor-pointer text-white px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
          Learn More About Nugen →
        </button>
      </motion.div>
    </section>
  );
}

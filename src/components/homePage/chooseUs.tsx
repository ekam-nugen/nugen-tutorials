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
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Industry-Aligned Courses",
    desc: "Master real-world tech stacks through hands-on projects built in collaboration with top tech employers.",
  },
  {
    icon: <Network size={28} />,
    title: "Job-Ready Curriculum",
    desc: "Everything we teach is built around what companies are hiring for—today and tomorrow.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI & Automation Training",
    desc: "Stay ahead of the curve by gaining deep, practical skills in AI, ML, and workflow automation.",
  },
  {
    icon: <Server size={28} />,
    title: "Cloud & DevOps Labs",
    desc: "Hands-on labs and real deployment scenarios using AWS, Azure, Docker, and Kubernetes.",
  },
  {
    icon: <Users size={28} />,
    title: "Mentorship From Experts",
    desc: "Learn from certified engineers and industry veterans who mentor you beyond just the syllabus.",
  },
  {
    icon: <Headset size={28} />,
    title: "Lifetime Career Support",
    desc: "Resume reviews, mock interviews, and job referrals—our support doesn’t stop after training.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified & Recognized",
    desc: "Courses accredited by top bodies and aligned with global certification standards like CompTIA, AWS, and Google.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Future-Proof Learning",
    desc: "From Web3 to GenAI, we constantly evolve to deliver skills that matter in a rapidly changing tech world.",
  },
];

export default function WhyNugenIT() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Learn With
            <span className="pl-2 text-[#ff6b3d]">Nugen IT Training</span>
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-3">
            <li>
              Over a decade of excellence in tech training and industry
              partnerships.
            </li>
            <li>
              Trained 10,000+ professionals who now work at global tech
              companies.
            </li>
            <li>
              Live instructor-led sessions, peer collaboration, and
              project-based learning.
            </li>
            <li>
              Exclusive hiring network with direct access to recruiters and
              internships.
            </li>
            <li>
              A mission-driven team focused on empowering learners to build
              meaningful tech careers.
            </li>
          </ul>
          <Image width={500} height={500} src="/whyUs.avif" alt="choose us" />
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
              className="bg-[#fff9f6] backdrop-blur-lg border border-orange-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 hover:scale-[1.02]"
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
        <Link href="/about-us" className="bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 cursor-pointer text-white px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
          Know More About Us →
        </Link>
      </motion.div>
    </section>
  );
}

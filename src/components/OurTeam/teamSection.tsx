import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface TeamMember {
    name: string;
    designation: string;
    project: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  }

const teamMembers: TeamMember[] = [
    {
      name: "Jaskaran Singh",
      designation: "React Developer",
      project: "Led development of responsive UIs for client web applications",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnR3YXJlJTIwZGV2ZWxvcGVycyUyMG1lbnN8ZW58MHx8MHx8fDA%3D",
      linkedin: "https://www.linkedin.com/in/jaskaran-singh",
      twitter: "https://twitter.com/jaskaran_singh",
      github: "https://github.com/jaskaran-singh",
    },
    {
      name: "Harsimran Kaur",
      designation: "React Native Developer",
      project: "Built cross-platform mobile apps with React Native",
      image:
        "https://images.unsplash.com/photo-1731419223715-aec6664f9011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvZnR3YXJlJTIwZGV2ZWxvcGVycyUyMHdvbWVuJTIwaW5kaWFufGVufDB8fDB8fHww",
      linkedin: "https://www.linkedin.com/in/harsimran-kaur",
      twitter: "https://twitter.com/harsimran_kaur",
      github: "https://github.com/harsimran-kaur",
    },
    {
      name: "Tushar Thakur",
      designation: "Node.js Developer",
      project: "Developed robust APIs for backend systems",
      image:
        "https://images.unsplash.com/photo-1654262609484-76d1a8f3b016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBlbmdpbmVlciUyMG1lbnN8ZW58MHx8MHx8fDA%3D",
      linkedin: "https://www.linkedin.com/in/tushar-thakur",
      twitter: "https://twitter.com/tushar_thakur",
      github: "https://github.com/tushar-thakur",
    },
    {
      name: "Harmandeep Singh",
      designation: "Full Stack Developer",
      project: "Integrated Next.js frontend with Node.js and MongoDB backend",
      image:
        "https://plus.unsplash.com/premium_photo-1683140683821-a3a418670cc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVyYmFuJTIwbWVufGVufDB8fDB8fHww",
      linkedin: "https://www.linkedin.com/in/harmandeep-singh",
      twitter: "https://twitter.com/harmandeep_singh",
      github: "https://github.com/harmandeep-singh",
    },
  ];

const TeamSection = () => {
  return (
    <>
            <section className="py-20 bg-gradient-to-r from-white via-[#fff1eb] to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 tracking-tight animate-fade-in">
            Our Developers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    // width={500}
                    // height={500}
                    src={member.image}
                    alt={member.name} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block  hover:bg-gradient-to-r from-orange-200 to-[#fff1eb] hover:text-white bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                      {member.designation}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 mb-4 line-clamp-2">
                    {member.project}
                  </p>
                </div>
                <div className="absolute inset-0 border-4 border-[#fff1eb] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
          <Link href="#home-hero" passHref>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View More
            </button>
          </Link>
        </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection;

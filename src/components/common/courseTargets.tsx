import Image from "next/image";

const courseTargets = [
  {
    title: "Launchpad for B.Tech Innovators",
    description:
      "Empowers engineering graduates to seamlessly transition into full-stack development with hands-on expertise and industry-relevant projects.",
    icon: "🎓",
    image: "/web.jpg",
  },
  {
    title: "Curated for BCA Visionaries",
    description:
      "Builds on foundational tech knowledge, equipping graduates with advanced tools and modern frameworks to accelerate their careers in frontend development.",
    icon: "💻",
    image: "/bcaImage.avif",
  },
  {
    title: "Engineered for M.Tech Professionals",
    description:
      "Designed to align with advanced academic proficiency, enabling deeper specialization and leadership in cutting-edge tech development.",
    icon: "🤖",
    image: "/mtech.jpg",
  },
  {
    title: "Edge for MCA Trailblazers",
    description:
      "Stay ahead in the evolving IT landscape with practical, project-based learning that complements academic achievements and drives real-world impact.",
    icon: "📊",
    image: "/mca.jpeg",
  },
];

export default function CourseTargets() {
  return (
    <section className="bg-white  py-16">
      <div className="max-w-7xl mx-auto cursor-pointer px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Who should take this course?
        </h2>
        <p className="text-black mb-12">
          Nugen IT Services Developers Certification is tailored for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseTargets.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-md text-black transition-transform transform hover:scale-105 bg-[#fff9f6]"
            >
              <div className="h-48 w-full relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 group-hover:bg-orange-50 transition-colors duration-300">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

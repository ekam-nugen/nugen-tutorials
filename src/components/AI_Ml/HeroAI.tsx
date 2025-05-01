"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface AIMLBannerProps {
  title: string;
  subtitle: string;
  reviewCount: number;
  reviewPlatforms: { name: string; imageSrc: string; alt: string }[];
  projectLink: string;
  teamLink: string;
  companyRatingText: string;
  ctaText: string;
  ctaLink: string;
  consultationTitle: string;
  consultationDescription: string;
  icons: (keyof typeof LucideIcons)[];
}

const AIMLBanner: React.FC<AIMLBannerProps> = ({
  title,
  subtitle,
  reviewCount,
  reviewPlatforms,
  projectLink,
  teamLink,
  companyRatingText,
  ctaText,
  ctaLink,
  consultationTitle,
  consultationDescription,
  icons,
}) => {
  const iconComponents: LucideIcon[] = icons.map(
    (name) => LucideIcons[name] as LucideIcon
  );

  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column */}
          <div className="lg:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              {subtitle}
            </h2>
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">
                {reviewCount}+ Glowing 5-Star Reviews
              </h4>
              <div className="flex gap-4 flex-wrap">
                {reviewPlatforms.map((platform) => (
                  <div key={platform.name} className="relative w-40 h-16">
                    <Image
                      src={platform.imageSrc}
                      alt={platform.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:w-5/12 text-center lg:text-right">
            <div className="bg-gradient-to-r from-white via-[#fff1eb] to-white border border-[#ffbb9f] text-gray-800 p-6 rounded-lg">
              <div className="mb-6">
                <div className="flex justify-center lg:justify-end mb-4">
                  {iconComponents.map((Icon, index) => (
                    <Icon
                      key={index}
                      className="w-20 h-20 text-[#ffbb9f]"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Get
                  <Link href={projectLink}>
                    <span className="text-[#ffbb9f]"> Project-based </span>
                  </Link>
                  and
                  <Link href={teamLink}>
                    <span className="text-[#ffbb9f]"> Dedicated Teams </span>
                  </Link>
                  {companyRatingText}.
                </h2>
                <Link
                  href={ctaLink}
                  className="bg-[#fff1eb] border border-orange-300 text-gray-800 hover:bg-[#ffede4] px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  {ctaText}
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <div className="pt-6 border-t border-gray-300">
                <h3 className="text-lg font-semibold mb-2">
                  {consultationTitle}
                </h3>
                <p className="text-gray-600">{consultationDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLBanner;

"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

export interface Competency {
  icon: keyof typeof LucideIcons; 
  title: string;
  content: string;
}

interface CoreCompetenciesProps {
  className?: string;
  title: string;
  subtitle: string;
  competencies: Competency[];
  ctaText: string;
  ctaLink: string;
  ctaDataAttribute: string;
}

const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({
  className,
  title,
  subtitle,
  competencies,
  ctaText,
  ctaLink,
  ctaDataAttribute,
}) => {
  const getIconComponent = (iconName: keyof typeof LucideIcons): LucideIcon => {
    return LucideIcons[iconName] as LucideIcon;
  };

  return (
    <div className={`py-12 px-4 bg-gradient-to-r from-white via-[#fff1eb] to-white sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, idx) => {
            const Icon = getIconComponent(competency.icon);
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="w-16 h-16 text-orange-500 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {competency.title}
                </h4>
                <p
                  className="text-gray-600 text-center"
                  dangerouslySetInnerHTML={{ __html: competency.content }}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={ctaLink}
            data-bookctablock={ctaDataAttribute}
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            {ctaText}
            <LucideIcons.ArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

export interface ProcessItem {
  number: number;
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
}

interface DevelopmentProcessProps {
  title: string;
  subtitle: string;
  highlightedText: string;
  processItems: ProcessItem[];
  ctaText: string;
  ctaLink: string;
  ctaDataAttribute: string;
}

const DevelopmentProcess: FC<DevelopmentProcessProps> = ({
  title,
  subtitle,
  highlightedText,
  processItems,
  ctaText,
  ctaLink,
  ctaDataAttribute,
}) => {
  const getIconComponent = (iconName: keyof typeof LucideIcons): LucideIcon => {
    return LucideIcons[iconName] as LucideIcon;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white via-[#fff1eb] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-6xl">
            {subtitle.split(highlightedText).map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="font-semibold">{highlightedText}</span>
                )}
              </span>
            ))}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {processItems.map((item) => {
              const Icon = getIconComponent(item.icon);
              return (
                <li
                  key={item.number}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-orange-500 mr-4">
                      {item.number}
                    </span>
                    <div className="flex items-center">
                      <Icon className="w-10 h-10 text-orange-500 mr-4" />
                      <h4 className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              );
            })}
          </ul>
          <Link
            href={ctaLink}
            className="mt-8 inline-flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
            data-bookctablock={ctaDataAttribute}
          >
            {ctaText}
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
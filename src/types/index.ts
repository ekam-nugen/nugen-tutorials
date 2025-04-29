import { LucideIcon } from "lucide-react";
import { JSX } from "react";
export interface IBannerFeature {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}
export type CourseBannerProps = {
  title: string;
  highlight: string;
  description: string;
  features: IBannerFeature[];
};
export interface IFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}
export type FeaturesSectionProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  features: IFeature[];
};
export interface ICareer {
  id: number;
  title: string;
  description: string;
  img: string;
  benefits: string[];
}
export interface IhowItWorks {
  title: JSX.Element;
  description: string;
}
export type TechDescriptionProps = {
  id?: string;
  techName: string;
  tagline: string;
  bannerFeatures: IBannerFeature[];
  courseFeatures: IFeature[];
  useCases: string[];
  career: ICareer[];
  howItWorks: IhowItWorks;
};

"use client";

import Services from "../about/Services";
import TeamChoose from "../OurTeam/teamChoose";
import AwardsSection from "./awardAection";
import BlogSectionPage from "./blogsection";

export default function BlogPageSection() {
  return (
    <>
      <BlogSectionPage />
      <Services />
      <AwardsSection />
      <TeamChoose />
    </>
  );
}

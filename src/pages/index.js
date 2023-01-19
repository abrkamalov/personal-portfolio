import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  // ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Abror Kamalov" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Here are a few technologies I’ve been working with recently:" />
        <ProjectsSection sectionId="projects" heading="Projects" />
      </Page>
    </>
  );
}

import React from 'react';
import HeroSection from './hero-section/HeroSection';
import SectionList from './sectionList/SectionList';

type AboutProps = {
  aboutTranslation: {
    heroSection: {
      description: string;
    };
    firstSection: {
      description: string;
    };
    secondSection: {
      description: string;
    };
    thirdSection: {
      description: string;
    };
    fourthSection: any;
    cooperation: string;
  };
};
const About: React.FC<AboutProps> = ({ aboutTranslation }) => {
  return (
    <div>
      <HeroSection
        heroSectionTranslation={aboutTranslation?.heroSection?.description}
      />
      <SectionList sectionListTranslation={aboutTranslation} />
    </div>
  );
};

export default About;

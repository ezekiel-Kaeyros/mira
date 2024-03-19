import React from 'react';
import CallToActionSection from './CallToActionSection';
import Image from 'next/image';
import character1 from '../.././../../public/images/character-1.svg';
import character2 from '../.././../../public/images/character-2.svg';
import LandingImage from '../../../../public/images/landingPageImage.svg';
import character3 from '../.././../../public/images/mobile-character.svg';

type valuesHeror = {
  title: string;
  excerpt: string;
  description: string;
  reportIncident: string;
};

type HersoSectionProps = {
  heroContent: valuesHeror;
  lang: string;
};

const HeroSection: React.FC<HersoSectionProps> = ({ heroContent, lang }) => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center w-full max-w-full my-16 lg:my-32 ">
        {/* <Image
          className="hidden md:block w-auto"
          src={character1}
          alt="character-1"
        /> */}

        <Image
          className="w-full lg:max-w-4xl"
          src={LandingImage}
          alt="Image representing diversity "
        />

        <div className=" text-center flex flex-col justify-center space-y-8  w-full">
          <div className="title-name space-y-4">
            {/* <Image
              className="block md:hidden w-64 mx-auto "
              src={character3}
              alt="character-1"
            /> */}
            <h1 className="text-4xl py-4 font-bold md:text-4xl text-primaryColor ">
              {heroContent.title}
            </h1>
            <span className="font-bold text-2xl text-secondaryColor">
              {heroContent.excerpt}
            </span>
            <div className=" text-base max-w-2xl mx-auto">
              {heroContent.description}
            </div>
          </div>

          <CallToActionSection lang={lang} buttonTranslations={heroContent} />
        </div>
        {/* <Image
          className="hidden md:block w-auto"
          src={character2}
          alt="character-1"
        /> */}
      </div>
      {/* Video */}
      <div className="w-full">
        <iframe
          src="https://www.youtube.com/embed/Jt0f5WyAoGU?si=O2J0ZOCEafAfoc0u"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full rounded-xl min-h-[24rem] lg:min-h-[40rem]"
        ></iframe>
      </div>
    </>
  );
};

export default HeroSection;

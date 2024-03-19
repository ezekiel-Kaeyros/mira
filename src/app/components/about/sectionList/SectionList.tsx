import React from 'react';
import Section from '../section/Section';
import AricLogo from '../../../../../public/images/partner3.png';
import AricImage from '../../../../../public/images/aricImage.png';
import VMDOLogo from '../../../../../public/images/partner2.png';
import VMDOImage from '../../../../../public/images/vmdoImage.png';
import LandesverbandLogo from '../../../../../public/images/partner1.png';
import LandesverbandImage from '../../../../../public/images/landesverbandImage.png';
import MIQLogo from '../../../../../public/images/miqLogo.svg';
import MEDARLogo from '../../../../../public/images/medarLogo.svg';
import DINALogo from '../../../../../public/images/dinaLogo.png';

import Link from 'next/link';
import Image from 'next/image';

type SectionListProps = {
  sectionListTranslation: {
    firstSection: {
      description: string;
    };
    secondSection: {
      description: string;
    };
    thirdSection: {
      description: string;
    };
    fourthSection: {
      title: string;
      firstSubsection: string;
      secondSubsection: string;
      thirdSubsection: string;
      fourthSubsection: string;
    };
    cooperation: string;
  };
};

const SectionList: React.FC<SectionListProps> = ({
  sectionListTranslation,
}) => {
  return (
    <div className="pt-12 lg:py-32 lg:space-y-32 space-y-8">
      <Section
        altImage="VMDO Logo"
        altLogo="VMDO logo"
        description={sectionListTranslation?.firstSection?.description}
        image={VMDOImage}
        logo={VMDOLogo}
      />

      <Section
        altImage="Aric Logo"
        altLogo="Aric Image"
        description={sectionListTranslation?.secondSection?.description}
        flip={true}
        image={AricImage}
        logo={AricLogo}
      />

      <Section
        altImage="Landesverband netzwerke von migrantenorganisationen LV-NEMO-NRW.DE"
        altLogo="Landesverband netzwerke von migrantenorganisationen LV-NEMO-NRW.DE"
        description={sectionListTranslation?.thirdSection?.description}
        image={LandesverbandImage}
        logo={LandesverbandLogo}
      />
      <div>
        <h1 className="font-bold  lg:text-2xl mb-4">
          {sectionListTranslation?.fourthSection?.title}
        </h1>
        <div className="flex lg:flex-row flex-col lg:space-x-4 justify-between">
          <div className="lg:w-[40rem] p-4 rounded-md bg-[#EBF4FA]">
            {sectionListTranslation?.fourthSection.firstSubsection}
          </div>
          <div className="lg:w-[40rem] mt-4 lg:mt-0 p-4 rounded-md bg-[#EBF4FA]">
            {sectionListTranslation?.fourthSection.secondSubsection}
          </div>
        </div>
        <div className="flex mt-4 lg:flex-row flex-col lg:space-x-4 justify-between">
          <div className="lg:w-[40rem] p-4 rounded-md bg-[#EBF4FA]">
            {sectionListTranslation?.fourthSection.thirdSubsection}
          </div>
          <div className="lg:w-[40rem] mt-4 lg:mt-0 p-4 rounded-md bg-[#EBF4FA]">
            {sectionListTranslation?.fourthSection.fourthSubsection}
          </div>
        </div>
      </div>

      {/* Other portals */}
      <h1 className="font-bold lg:text-2xl">
        {sectionListTranslation?.cooperation}
      </h1>
      <div className="flex space-x-12">
        <Link target="_blank" href={'https://miq-nrw.vercel.app/'}>
          <Image className="w-48 lg:w-72" src={MIQLogo} alt="MIQ Logo" />
        </Link>
        <Link target="_blank" href={'https://medar-nrw.vercel.app/'}>
          <Image className="w-48 lg:w-72" src={MEDARLogo} alt="MEDAR Logo" />
        </Link>
        <Link target="_blank" href={'https://dina-nrw.vercel.app/'}>
          <Image className="w-48 lg:w-72" src={DINALogo} alt="DINA Logo" />
        </Link>
      </div>
    </div>
  );
};

export default SectionList;

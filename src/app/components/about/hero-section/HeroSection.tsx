import Image from 'next/image';
import React from 'react';
import Logo from '../../../../../public/logo.svg';
import AricLogo from '../../../../../public/images/partner3.png';
import VMDOLogo from '../../../../../public/images/partner2.png';
import Landesverband from '../../../../../public/images/partner1.png';

type HeroSectionProps = {
  heroSectionTranslation: string;
};
const HeroSection: React.FC<HeroSectionProps> = ({
  heroSectionTranslation,
}) => {
  return (
    <div className="flex  flex-col items-center">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="my-8 lg:max-w-2xl font-bold text-center">
        {heroSectionTranslation && heroSectionTranslation}
      </div>
      <div className="flex items-center space-x-8">
        <Image className="w-24 xl:w-[9rem]" src={VMDOLogo} alt="VMDO logo" />
        <Image src={AricLogo} className="w-24 xl:w-[9rem]" alt="ARIC Logo" />

        <Image
          className="w-24 xl:w-[9rem]"
          src={Landesverband}
          alt="Landesverband netzwerke von migrantenorganisationen LV-NEMO-NRW.DE"
        />
      </div>
    </div>
  );
};

export default HeroSection;

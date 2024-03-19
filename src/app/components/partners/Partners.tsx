import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Partner1 from '../../../../public/images/partner1.png';
import Partner2 from '../../../../public/images/partner2.png';
import Partner3 from '../../../../public/images/partner3.png';

type PartnersProps = {
  partnersTranslationTitle: string;
};
const Partners: React.FC<PartnersProps> = ({ partnersTranslationTitle }) => {
  return (
    <div className="my-16">
      <div className="font-bold text-2xl md:text-3xl mb-16">
        {partnersTranslationTitle}
      </div>
      <div className="grid grid-cols-3 md:max-w-5xl ">
        <Link target="_blank" href="https://www.bv-nemo.de/">
          <Image
            className="w-[7rem] md:w-[12rem]"
            src={Partner1}
            alt="Landesverband netzwerke von Migrantenorganisationen logo"
          />
        </Link>

        <Link target="_blank" href="https://www.vmdo.de/">
          <Image
            className="w-[7rem] md:w-[12rem]"
            src={Partner2}
            alt="Landesverband netzwerke von Migrantenorganisationen logo"
          />
        </Link>

        <Link target="_blank" href="https://www.aric-nrw.de/">
          <Image
            className="w-[7rem] md:w-[12rem]"
            src={Partner3}
            alt="Landesverband netzwerke von Migrantenorganisationen logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Partners;

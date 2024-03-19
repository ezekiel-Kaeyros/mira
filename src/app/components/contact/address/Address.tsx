import Image from 'next/image';
import React from 'react';
import phoneIcon from '../../../../../public/icons/phoneIcon.svg';
import mailIcon from '../../../../../public/icons/mailIcon.svg';

type AddressProps = {
  addressTranslation: {
    title: string;
    description: string;
  };
};

const Address: React.FC<AddressProps> = ({ addressTranslation }) => {
  return (
    <div>
      <h1 className="font-bold text-md mb-8  lg:text-2xl">
        {addressTranslation?.title}
      </h1>
      <div className="bg-gray-200 p-4 rounded-md">
        <h2 className="font-bold">{addressTranslation?.description}</h2>
        <div className="mt-4">Zur Vielfalt 21 44147 Dortmund</div>
        <div className="my-4">
          <div className="flex items-center">
            <Image src={phoneIcon} alt="Phone icon" />
            <div className="ml-2">(+49) 02226 900900</div>
          </div>
          <div className="flex mt-4 items-center">
            <Image src={mailIcon} alt="Email icon" />
            <div className="ml-2">meldestelle@vmdo.de</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;

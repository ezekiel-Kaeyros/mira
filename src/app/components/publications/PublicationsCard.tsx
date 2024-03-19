import Image from 'next/image';
import React from 'react';
import DownloadIcon from '../../../../public/icons/downloadIcon.svg';
import ImageSymbol from '../../../../public/images/peopleM.png';

type PublicationsCardProps = {
  title: string;
  description: string;
  color: string;
};

const PublicationsCard: React.FC<PublicationsCardProps> = ({
  title,
  description,
  color,
}) => {
  return (
    <div
      className={`p-6 ${color} hover:scale-105 justify-center flex hover:transition hover:ease-in-out transition ease-in-out my-4 md:m-0 w-full rounded-lg cursor-pointer`}
    >
      <div>
        <div className="w-fit">{description}</div>
        <div className="font-bold w-fit text-2xl">{title}</div>
        <div className="flex w-fit items-center my-3">
          <div className="font-bold w-fit mr-2">Download</div>
          <Image src={DownloadIcon} alt="download icon" />
        </div>
        <Image src={ImageSymbol} alt="M symbol with users" />
      </div>
    </div>
  );
};

export default PublicationsCard;

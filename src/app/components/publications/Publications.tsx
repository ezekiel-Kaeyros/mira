import React from 'react';
import PublicationsCard from './PublicationsCard';
import Link from 'next/link';
import bookPublication from '../.././../../public/images/book.png';
import Image from 'next/image';
import videoPlaceholder from '../.././../../public/images/video-player.svg';
import user1 from '../.././../../public/images/User-1.png';

type PublicationPropsTypes = {
  publicationsTranslation: {
    title: string;
    card: {
      description: string;
    };
  };
};

const Publications: React.FC<PublicationPropsTypes> = ({
  publicationsTranslation,
}) => {
  return (
    <div className="h-max my-20">
      <div className="flex justify-center items-center py-8">
        <Image src={videoPlaceholder} alt="video-placeholder"></Image>
      </div>
      <div className=" flex flex-col md:flex-row w-full justify-between max-w-full items-start md:items-center ">
        <div className="max-w-lg">
          <h2 className="font-bold text-4xl ">
            {publicationsTranslation?.title}
          </h2>
          <p className="pb-8">
            Together, we have made significant strides towards equality and
            justice. Join us as we celebrate the milestones achieved,
            partnerships formed, and the positive changes we have initiated.
            With your continued support, we are building bridges and creating
            lasting change in our communities. Explore the report to learn more
            about our accomplishments and our vision for a future free from
            racial discrimination.
          </p>

          <Link
            className="rounded-full bg-secondaryColor text-white py-3 px-6"
            href={'#'}
          >
            Download Documentation
          </Link>
        </div>
        <Image className=" mt-8" src={bookPublication} alt="bookpublication" />
      </div>

      <div className="Team flex gap-5 flex-col md:flex-row justify-between items-center w-full">
        <div className="bg-[#EBF4FA] rounded-2xl px-8 pt-6 pb-4 relative ">
          <Image src={user1} alt="team user"></Image>

          <div className="space-y-2 mt-24">
            <p className="font-bold text-2xl">Tanzine Jackson</p>
            <p>Team Member</p>
          </div>
          <div className="hidden md:block bg-orange-500 h-full w-full absolute -right-10 top-0 -z-10 rounded-2xl "></div>
        </div>
        <div className="bg-[#EBF4FA] rounded-2xl px-8 pt-6 pb-4 relative">
          <Image src={user1} alt="team user"></Image>

          <div className="space-y-2 mt-24">
            <p className="font-bold text-2xl">Tanzine Jackson</p>
            <p>Team Member</p>
          </div>
          <div className="hidden md:block bg-orange-500 h-full w-full absolute -right-10 top-0 -z-10 rounded-2xl "></div>
        </div>
        <div className="bg-[#EBF4FA] rounded-2xl px-8 pt-6 pb-4 relative">
          <Image src={user1} alt="team user"></Image>

          <div className="space-y-2 mt-24">
            <p className="font-bold text-2xl">Tanzine Jackson</p>
            <p>Team Member</p>
          </div>
          <div className="hidden md:block bg-orange-500 h-full w-full absolute -right-10 top-0 -z-10 rounded-2xl "></div>
        </div>
      </div>
    </div>
  );
};

export default Publications;

import Image from 'next/image';
import React from 'react';

type SectionProps = {
  description: string;
  logo: any;
  altLogo: string;
  image: any;
  altImage: string;
  flip?: boolean;
};

const Section: React.FC<SectionProps> = ({
  description,
  image,
  altImage,
  altLogo,
  logo,
  flip,
}) => {
  return (
    <div
      className={` ${
        flip ? 'lg:flex-row-reverse ' : 'lg:flex-row lg:space-x-10'
      } flex w-full items-center  flex-col-reverse  space-y-6 lg:space-y-0 lg:flex-row`}
    >
      <div className={`${flip && 'lg:ml-10'} mt-4 lg:mt-0 lg:w-1/2`}>
        <p>{description}</p>
        <div className="mt-8">
          <Image src={logo} alt={altLogo} />
        </div>
      </div>
      <div className="className='lg:w-1/2'">
        <Image src={image} alt={altImage} />
      </div>
    </div>
  );
};

export default Section;

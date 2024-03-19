import React from 'react';
import { Button } from '../../button/Button';
import Image from 'next/image';

type ModalLayoutProps = {
  title: string;
  description: string;
};
const ModalLayout: React.FC<ModalLayoutProps> = ({ title, description }) => {
  return (
    <div className="flex md:flex-row flex-col h-[25rem] w-full justify-between md:space-x-8">
      <div className="bg-gray-500 h-10rem w-full md:w-1/2">
        <Image src="" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-between">
        <h1 className="font-bold text-xl md:text-3xl mb-4">{title}</h1>
        <p className="text-left">{description}</p>
        <Button href="/report"> Start Report</Button>
      </div>
    </div>
  );
};

export default ModalLayout;

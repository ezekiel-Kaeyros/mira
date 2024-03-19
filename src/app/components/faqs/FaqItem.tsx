'use client';
import React, { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

type FaqItemProps = {
  title?: string;
  content: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ title, content }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="border-b-[1px] relative px-8 cursor-pointer py-8 rounded-lg h-fit  bg-[#EBF4FA] text-black "
    >
      <div className="absolute right-4 top-4">
        {toggle ? (
          <MinusIcon variant="active" />
        ) : (
          <PlusIcon variant="inactive" />
        )}
      </div>
      <div className="text-md  font-bold text-[#170F49] pr-12">{title}</div>
      {toggle && (
        <div className="my-4 transition duration-200 ease  text-[#6F6C90]">
          {content}
        </div>
      )}
    </div>
  );
};

export default FaqItem;

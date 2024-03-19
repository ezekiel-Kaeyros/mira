import React from 'react';
import FaqItem from './FaqItem';

export type dataType = { id: number; question: string; answer: string };

type FaqsProps = {
  faqs?: dataType[];
  title: string;
};
const Faqs: React.FC<FaqsProps> = ({ title, faqs }) => {
  return (
    <div className="my-12 z-10 w-full" id="faqs">
      <h1 className="font-bold text-3xl mb-8">{title}</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
        {faqs?.map((faq: dataType) => (
          <FaqItem key={faq?.id} title={faq?.question} content={faq?.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;

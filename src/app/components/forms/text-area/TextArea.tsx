'use client';

import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';

type TextAreaProps = {
  props: any;
  id: string;
  name: string;
  label: string;
  hints?: any;
  dynamicItem?: string;
  placeholder: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  id,
  props,
  name,
  placeholder,
  dynamicItem,
  label,
  hints,
}) => {
  const { racismType } = useFormContext();

  console.log(dynamicItem);
  return (
    <div className="relative flex flex-col xl:block">
      <label htmlFor={id} className="block mb-4 font-bold text-gray-900">
        {label}
      </label>
      <textarea
        id={id}
        rows={7}
        maxLength={500}
        name={name}
        {...props}
        className="block relative p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      />
      {hints && (
        <div className="w-full mt-4 lg:mt-0 lg:max-w-md border text-sm border-orange-200 bg-gray-100 p-4 top-0 rounded-md lg:absolute lg:-right-[26rem] lg:w-96">
          <h3 className="font-bold mb-2">
            {hints?.asian?.description.hints.title}
          </h3>
          <ul className="list-disc ml-8 ">
            <li>{hints?.asian?.description.hints.item1}</li>
            <li className="py-1">{hints?.asian?.description.hints.item2}</li>
            <li>{hints?.asian?.description.hints.item3}</li>
            <li className="py-1">{hints?.asian?.description.hints.item4}</li>
            <li>{hints?.asian?.description.hints.item5}</li>

            {racismType === 'asian' ? (
              <li className="py-1">{hints?.asian?.description.hints.item6}</li>
            ) : racismType === 'black' ? (
              <li className="py-1"> {hints?.black?.description.hints.item6}</li>
            ) : (
              ''
            )}
            {dynamicItem && (
              <li className="py-1">
                <span className="mr-1">
                  {hints?.asian?.description.hints.dynamicFirstPart}
                </span>
                {dynamicItem}
                <span className="ml-1">
                  {hints?.asian?.description.hints.dynamicSeconPart}
                </span>
              </li>
            )}
            <li>{hints?.asian?.description.hints.item7}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TextArea;

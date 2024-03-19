import Image from 'next/image';
import React from 'react';
import QuestionMarkIcon from '../../../../../public/icons/questionMark.svg';

type RadioSingleProps = {
  props: any;
  value?: string;
  name: string;
  id: string;
  label: string;
  example?: string;
};

const RadioSingle: React.FC<RadioSingleProps> = ({
  props,
  id,
  value,
  name,
  label,
  example,
}) => {
  return (
    <div className="md:flex md:justify-between flex flex-col">
      <div className="flex items-center">
        <input
          {...props}
          id={`${id}`}
          type="radio"
          value={value}
          name={name}
          className={` ${
            id === 'secondAgreement'
              ? 'w-5 h-5 lg:w-6 lg:h-6'
              : 'w-5 h-5 lg:w-6 lg:h-6'
          } text-yellow-300 bg-gray-100   dark:ring-offset-gray-800`}
        />
        {label && (
          <label
            htmlFor={id}
            className="w-full relative [&>*]:hover:flex py-3 ml-2 text-sm font-medium text-gray-900 "
          >
            {example && (
              <span className="absolute z-50 bg-gray-100 hidden w-96 -right-72 -top-0 shadow-lg p-2 rounded-md">
                {example}
              </span>
            )}
            <div className="flex">
              {label}
              {example && (
                <Image
                  src={QuestionMarkIcon}
                  alt="Question mark icon"
                  className="ml-2  "
                />
              )}
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default RadioSingle;

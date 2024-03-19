import Image from 'next/image';
import React from 'react';
import QuestionMarkIcon from '../../../../../public/icons/questionMark.svg';

type RadioGroupProps = {
  options: Array<{
    iD: number;
    id: string;
    name: string;
    label: string;
    examples?: string;
    checked: boolean;
    value: string;
  }>;
  title: string;
  props: any;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options, title, props }) => {
  return (
    <>
      <div className="mb-3 font-bold">{title}</div>
      <div className="md:flex md:justify-between flex flex-col">
        {options?.map((radioElement) => (
          <div key={radioElement?.iD} className="flex items-center ">
            <input
              {...props}
              id={`${radioElement?.id}`}
              type="radio"
              value={radioElement?.value}
              name={radioElement?.name}
              className="w-6 h-6 text-yellow-300 bg-gray-100   dark:ring-offset-gray-800  "
            />
            <label
              htmlFor={radioElement?.id}
              className="w-full relative [&>*]:hover:flex py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              {radioElement?.examples && (
                <span className="absolute z-50 bg-gray-100 hidden w-96 -right-72 -top-0 shadow-lg p-2 rounded-md">
                  {radioElement?.examples}
                </span>
              )}
              <div className="flex">
                {radioElement.label}
                {radioElement?.examples && (
                  <Image
                    src={QuestionMarkIcon}
                    alt="Question mark icon"
                    className="ml-2  "
                  />
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;

import Image from 'next/image';
import React from 'react';
import QuestionMarkIcon from '../../../../../public/icons/questionMark.svg';

type CheckboxProps = {
  name: string;
  id: string;
  value: string;
  examples?: string;
  label?: string;
  variant: 'black' | 'asian' | 'other';
  props: any;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  id,
  value,
  label,
  props,
  variant,
  examples,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center mr-4 mb-0">
        <input
          {...props}
          id={id}
          type="checkbox"
          value={value}
          name={name}
          className={`${
            variant === 'black'
              ? 'text-blackColor'
              : variant === 'asian'
              ? 'text-asianColor'
              : 'text-OtherColor'
          } w-5 h-5  bg-gray-100 border-gray-300 rounded`}
        />
        <label
          htmlFor={id}
          className="relative [&>*]:hover:flex ml-2 text-sm font-medium text-gray-900"
        >
          {examples && (
            <span className="absolute z-50 bg-gray-100 hidden w-96 -right-[30rem] -top-0 shadow-lg p-2 rounded-md">
              {examples}
            </span>
          )}
          <div className="flex cursor-pointer">
            {label}
            {examples && (
              <Image
                src={QuestionMarkIcon}
                alt="Question mark icon"
                className="ml-2  "
              />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

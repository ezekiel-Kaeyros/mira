import React from 'react';

type SelectFieldProps = {
  title: string;
  name: string;
  options: Array<string>;
  examples?: string;
  props: any;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  props,
  examples,
}) => {
  return (
    <>
      <label htmlFor={name} className="block mb-4 font-bold text-gray-900 ">
        {title}
      </label>
      <select
        name={name}
        {...props}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 py-3 block w-full p-2.5"
      >
        {options?.map((option: any) => (
          <option key={option?.id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;

import React from 'react';

type PlusIconProps = {
  variant: 'active' | 'inactive';
};

const PlusIcon: React.FC<PlusIconProps> = ({ variant }) => {
  return (
    <div
      className={`flex justify-center ${
        variant === 'active' ? 'bg-[#FD5001]' : 'bg-[#F7F7FF]'
      } items-center rounded-lg p-2 w-8 h-8`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.76514 0.985254C9.13001 0.985254 8.61514 1.50013 8.61514 2.13525V18.1353C8.61514 18.7704 9.13001 19.2853 9.76514 19.2853C10.4003 19.2853 10.9151 18.7704 10.9151 18.1353V2.13525C10.9151 1.50013 10.4003 0.985254 9.76514 0.985254Z"
          fill={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke-width="0.3"
          stroke-linecap="round"
        />
        <path
          d="M1.76514 8.98525C1.13001 8.98525 0.615137 9.50013 0.615137 10.1353C0.615137 10.7704 1.13001 11.2853 1.76514 11.2853H17.7651C18.4003 11.2853 18.9151 10.7704 18.9151 10.1353C18.9151 9.50013 18.4003 8.98525 17.7651 8.98525H1.76514Z"
          fill={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke-width="0.3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;

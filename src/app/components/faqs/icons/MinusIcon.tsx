import React from 'react';

type MinusIconProps = {
  variant: 'active' | 'inactive';
};

const MinusIcon: React.FC<MinusIconProps> = ({ variant }) => {
  return (
    <div
      className={`flex justify-center ${
        variant === 'active' ? 'bg-[#FD5001]' : 'bg-[#F7F7FF]'
      } items-center rounded-lg p-2 w-8 h-8`}
    >
      <svg
        width="20"
        height="4"
        viewBox="0 0 20 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.76562 0.6C1.1305 0.6 0.615625 1.11487 0.615625 1.75C0.615625 2.38513 1.1305 2.9 1.76563 2.9H17.7656C18.4008 2.9 18.9156 2.38513 18.9156 1.75C18.9156 1.11487 18.4008 0.6 17.7656 0.6H1.76562Z"
          fill={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke={`${variant === 'active' ? '#ffffff' : '#6F6C90'}`}
          stroke-width="0.3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default MinusIcon;

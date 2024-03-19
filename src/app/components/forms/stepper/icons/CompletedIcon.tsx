import React from 'react';

type CompletedIconProps = {
  variant: 'black' | 'asian' | 'other' | 'notSure';
  isActive: boolean;
};
const CompletedIcon: React.FC<CompletedIconProps> = ({ variant, isActive }) => {
  return (
    <svg
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.87188L10.7805 17.3334L26 2.66675"
        stroke={`${
          variant === 'black'
            ? '#587D71'
            : variant === 'asian'
            ? '#D90429'
            : '#393F44'
        }`}
        opacity={`${isActive ? '100%' : '30%'}`}
        stroke-width="5"
      />
    </svg>
  );
};

export default CompletedIcon;

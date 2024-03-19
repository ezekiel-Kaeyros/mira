import React from 'react';

type PenIconProps = {
  variant: 'black' | 'asian' | 'other' | 'notSure';
  isActive: boolean;
};

const PenIcon: React.FC<PenIconProps> = ({ variant, isActive }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8 12.7399L18.856 11.7972L5.656 24.9972H0V19.3399L15.0853 4.25322L22.628 11.7959C22.878 12.0459 23.0184 12.385 23.0184 12.7386C23.0184 13.0921 22.878 13.4312 22.628 13.6812L13.1987 23.1092L11.3133 21.2239L19.7987 12.7386L19.8 12.7399ZM20.7413 0.483888L24.5133 4.25455C24.7633 4.50459 24.9037 4.84367 24.9037 5.19722C24.9037 5.55077 24.7633 5.88985 24.5133 6.13989L22.6267 8.02656L16.9693 2.36922L18.8547 0.483888C19.1047 0.233926 19.4438 0.0935059 19.7973 0.0935059C20.1509 0.0935059 20.4913 0.233926 20.7413 0.483888Z"
        fill={`${
          variant === 'black'
            ? '#587D71'
            : variant === 'asian'
            ? '#D90429'
            : '#393F44'
        }`}
        opacity={`${isActive ? '100%' : '30%'}`}
      />
    </svg>
  );
};

export default PenIcon;

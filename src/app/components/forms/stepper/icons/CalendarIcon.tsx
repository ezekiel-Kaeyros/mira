import React from 'react';

type CalendarIconProps = {
  variant: 'black' | 'asian' | 'other' | 'notSure';
  isActive: boolean;
};
const CalendarIcon: React.FC<CalendarIconProps> = ({ variant, isActive }) => {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.600098 6.4C0.600098 4.64 2.0401 3.2 3.8001 3.2H26.2001C27.0488 3.2 27.8627 3.53714 28.4628 4.13726C29.063 4.73737 29.4001 5.55131 29.4001 6.4V28.8C29.4001 29.6487 29.063 30.4626 28.4628 31.0627C27.8627 31.6629 27.0488 32 26.2001 32H3.8001C2.9514 32 2.13747 31.6629 1.53736 31.0627C0.93724 30.4626 0.600098 29.6487 0.600098 28.8V6.4ZM3.8001 9.6V28.8H26.2001V9.6H3.8001ZM7.0001 0H10.2001V3.2H7.0001V0ZM19.8001 0H23.0001V3.2H19.8001V0ZM7.0001 14.4H10.2001V17.6H7.0001V14.4ZM7.0001 20.8H10.2001V24H7.0001V20.8ZM13.4001 14.4H16.6001V17.6H13.4001V14.4ZM13.4001 20.8H16.6001V24H13.4001V20.8ZM19.8001 14.4H23.0001V17.6H19.8001V14.4ZM19.8001 20.8H23.0001V24H19.8001V20.8Z"
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

export default CalendarIcon;

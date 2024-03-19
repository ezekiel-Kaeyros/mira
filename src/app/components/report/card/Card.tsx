import React from 'react';
import { Button } from '../../button/Button';

type CardProps = {
  title: string;
  color: string;
};

const Card: React.FC<CardProps> = ({ title, color }) => {
  return (
    <div
      className={`h-[150px] p-4 cursor-pointer rounded-md bg-[${color}]  w-full flex flex-col justify-between`}
    >
      <div className="text-xl">{title}</div>
      <div>
        <Button variant="secondary">Start Report</Button>
      </div>
    </div>
  );
};

export default Card;

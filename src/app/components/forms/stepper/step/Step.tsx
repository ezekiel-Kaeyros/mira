import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import CompletedIcon from '../icons/CompletedIcon';

interface StepProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepVariants> {
  title: string;
  icon: any;
  state: 'completed' | 'uncompleted';
  type: 'black' | 'asian' | 'other' | 'notSure';
}

const stepVariants = cva(
  'w-full relative flex w-16 md:w-48 h-16 flex-col flex-col-reverse  justify-center  items-center md:relative md:text-white font-medium md:flex md:items-center md:px-8 rounded-full md:justify-center py-3',

  {
    variants: {
      variant: {
        blackInactive: 'bg-slate-200 text-slate-400  hover:opacity-90',
        asianInactive: 'bg-slate-200 text-slate-400  hover:opacity-90',
        otherInactive: 'bg-slate-200 text-slate-400  hover:opacity-90 ',
        blackActive: 'bg-[#393F44] text-slate-400 font-bold hover:opacity-90',
        asianActive: 'bg-[#D90429] text-slate-400  hover:bg-opacity-90',
        otherActive: 'bg-[#393F44] text-slate-400  hover:opacity-90 ',
      },
    },

    defaultVariants: {
      variant: 'blackInactive',
    },
  }
);

const Step: React.FC<StepProps> = ({
  title,
  icon,
  state,
  type,
  variant,
  className,
  ...props
}) => {
  return (
    <AnimateClick>
      <div {...props} className={cn(stepVariants({ variant, className }))}>
        <div className="font-bold  text-xs md:text-sm text-center md:text-left pt-24 md:pt-0 w-full mr-2 ml-2 md:ml-0 md:mr-8">
          {title}
        </div>
        <div className="bg-white absolute w-12 md:w-16 md:h-16 md:absolute  flex  md:flex-row items-center justify-center h-12  px-2 md:px-4 md:-right-2 rounded-full p-2">
          {state === 'completed' ? (
            <CompletedIcon isActive={true} variant={type} />
          ) : (
            <>{icon}</>
          )}
        </div>
      </div>
    </AnimateClick>
  );
};

export { Step, stepVariants };

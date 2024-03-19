import React, { ReactNode } from 'react';
import Stepper from '../stepper/Stepper';
import ButtonGroup from './button-group/ButtonGroup';
import { useFormContext } from '@/app/hooks/useFormContext';

type LayoutProps = {
  children: ReactNode;
  stepperTranslation: any;
  buttonTranslation: any;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  stepperTranslation,
  buttonTranslation,
}) => {
  const { step } = useFormContext();

  return (
    <div
      className={` ${
        step !== 1 &&
        step !== 2 &&
        step !== 6 &&
        step !== 7 &&
        'flex justify-between'
      } max-w-3xl xl:max-w-4xl mx-auto mt-24 flex-col md:flex-row md:space-x-16`}
    >
      <div className="mr-4 max-w-2xl md:max-w-md">
        {step !== 1 && step !== 2 && step !== 6 && step !== 7 && (
          <Stepper stepperTranslation={stepperTranslation} />
        )}
      </div>
      <div
        className={`w-full full min-h-[500px] ${
          step === 1 || step === 2 || step === 6 || step === 7
            ? 'w-full'
            : 'max-w-2xl flex flex-col justify-between'
        } `}
      >
        {children}
        <div className="w-full">
          {step !== 1 && step !== 2 && step !== 6 && step !== 7 && (
            <ButtonGroup buttonTranslation={buttonTranslation} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;

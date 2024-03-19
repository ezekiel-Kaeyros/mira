'use client';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import { Step } from '../step/Step';
import PersonIcon from '../icons/PersonIcon';
import CalendarIcon from '../icons/CalendarIcon';
import PenIcon from '../icons/PenIcon';
import ConfirmationIcon from '../icons/ConfirmationIcon';

type StepperValueProps = {
  firstStep: string;
  secondStep: string;
  thirdStep: string;
};

type StepperProps = {
  stepperTranslation: StepperValueProps | null;
};

const OtherRacismStepper: React.FC<StepperProps> = ({ stepperTranslation }) => {
  const { step, racismType } = useFormContext();
  return (
    <div className="flex flex-col relative">
      <Step
        variant={`${step === 1 ? 'otherActive' : 'otherInactive'}`}
        title="Identity"
        icon={
          <PersonIcon
            isActive={step === 2 ? false : true}
            variant={racismType}
          />
        }
        state={`${
          step === 2 || step === 3 || step === 4 ? 'completed' : 'uncompleted'
        }`}
        type={racismType}
      />
      <Step
        className="my-8"
        variant={`${step === 2 ? 'otherActive' : 'otherInactive'}`}
        title="Place & Time"
        icon={
          <CalendarIcon
            isActive={step === 2 ? true : false}
            variant={racismType}
          />
        }
        state={`${step === 3 || step === 4 ? 'completed' : 'uncompleted'}`}
        type={racismType}
      />
      <Step
        variant={`${step === 3 ? 'otherActive' : 'otherInactive'}`}
        title="Description"
        icon={
          <PenIcon isActive={step === 3 ? true : false} variant={racismType} />
        }
        state={`${step === 4 ? 'completed' : 'uncompleted'}`}
        type={racismType}
      />
      <Step
        variant={`${step === 4 ? 'otherActive' : 'otherInactive'}`}
        className="my-8"
        title="Confirmation"
        icon={
          <ConfirmationIcon
            isActive={step === 4 ? true : false}
            variant={racismType}
          />
        }
        state="uncompleted"
        type={racismType}
      />
      <div className="bg-slate-300 w-1  h-64 absolute -z-10 top-0 right-4"></div>
    </div>
  );
};

export default OtherRacismStepper;

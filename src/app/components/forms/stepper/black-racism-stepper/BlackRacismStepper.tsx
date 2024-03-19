'use client';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import { Step } from '../step/Step';
import PersonIcon from '../icons/PersonIcon';
import CalendarIcon from '../icons/CalendarIcon';
import PenIcon from '../icons/PenIcon';
import ConfirmationIcon from '../icons/ConfirmationIcon';

type StepperValueProps = {
  identity: string;
  placeTime: string;
  description: string;
  confirmation: string;
};

type StepperProps = {
  stepperTranslation: StepperValueProps;
};

const BlackRacismStepper: React.FC<StepperProps> = ({ stepperTranslation }) => {
  const { step, racismType } = useFormContext();
  return (
    <div className="flex mb-8 md:mb-0 justify-between items-center md:flex-col relative">
      <Step
        variant={`${step === 3 ? 'blackActive' : 'blackInactive'}`}
        title={stepperTranslation?.identity}
        icon={
          <PersonIcon isActive={step === 4 ? false : true} variant="other" />
        }
        state={`${
          step === 4 || step === 5 || step === 6 ? 'completed' : 'uncompleted'
        }`}
        type={racismType}
      />
      <Step
        className="my-8"
        variant={`${step === 4 ? 'blackActive' : 'blackInactive'}`}
        title={stepperTranslation?.placeTime}
        icon={
          <CalendarIcon isActive={step === 4 ? true : false} variant="other" />
        }
        state={`${step === 5 || step === 6 ? 'completed' : 'uncompleted'}`}
        type={racismType}
      />
      <Step
        variant={`${step === 5 ? 'blackActive' : 'blackInactive'}`}
        title={stepperTranslation?.description}
        icon={<PenIcon isActive={step === 5 ? true : false} variant="other" />}
        state={`${step === 6 ? 'completed' : 'uncompleted'}`}
        type={racismType}
      />
      <Step
        variant={`${step === 6 ? 'blackActive' : 'blackInactive'}`}
        className="my-8"
        title={stepperTranslation?.confirmation}
        icon={
          <ConfirmationIcon
            isActive={step === 6 ? true : false}
            variant="other"
          />
        }
        state="uncompleted"
        type={racismType}
      />
      <div className="bg-slate-300 hidden md:hidden w-1  h-64 absolute -z-10 top-0 right-4"></div>
    </div>
  );
};

export default BlackRacismStepper;

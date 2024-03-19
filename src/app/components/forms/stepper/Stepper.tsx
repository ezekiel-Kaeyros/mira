'use client';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import BlackRacismStepper from './black-racism-stepper/BlackRacismStepper';

type StepperProps = {
  stepperTranslation: any;
};

const Stepper: React.FC<StepperProps> = ({ stepperTranslation }) => {
  const { step, racismType } = useFormContext();
  return (
    <>
      <BlackRacismStepper stepperTranslation={stepperTranslation} />
    </>
  );
};

export default Stepper;

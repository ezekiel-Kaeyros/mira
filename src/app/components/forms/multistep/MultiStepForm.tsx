'use client';
import React from 'react';
import Stepper from '../stepper/Stepper';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import ThirdStep from './third-step/ThirdStep';
import { Button } from '../../button/Button';
import { NEXT_STEP, PREV_STEP, SUBMIT_FORM } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';
import Layout from './Layout';
import FourthStep from './fourth-step/FourthStep';
import InitialStep from './initial-step/InitialStep';
import Datenschutz from './datenschutz/Datenschutz';
import FifthStep from './fifth-step/FifthStep';

type MultiStepFormValuesProps = {
  stepper: {
    initialStep: any;
    datenschutz: any;
    firstStep: any;
    secondStep: any;
    thirdStep: any;
    fourthStep: any;
    fifthStep: any;
    steps: any;
  };
  formFields: any;
  button: any;
};

type MultiStepFormProps = {
  formTranslation: MultiStepFormValuesProps | any;
  lang: string;
};

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  formTranslation,
  lang,
}) => {
  const { step, dispatch } = useFormContext();

  return (
    <Layout
      buttonTranslation={formTranslation?.button}
      stepperTranslation={formTranslation?.stepper?.steps}
    >
      {step === 1 ? (
        <InitialStep
          initialStepTranslation={formTranslation?.stepper?.initialStep}
        />
      ) : step === 2 ? (
        <Datenschutz
          lang={lang}
          datenschutzTranslation={formTranslation?.stepper?.datenschutz}
        />
      ) : step === 3 ? (
        <FirstStep firstStepTranslation={formTranslation?.stepper?.firstStep} />
      ) : step === 4 ? (
        <SecondStep
          secondStepTranslation={formTranslation?.stepper?.secondStep}
        />
      ) : step === 5 ? (
        <ThirdStep thirdStepTranslation={formTranslation?.stepper?.thirdStep} />
      ) : step === 6 ? (
        <FourthStep
          fourthStepTranslation={formTranslation?.stepper?.fourthStep}
        />
      ) : (
        <FifthStep
          fourthStepTranslation={formTranslation?.stepper?.fourthStep}
          lang={lang}
          fifthStepTranslation={formTranslation?.stepper?.fifthStep}
        />
      )}
    </Layout>
  );
};

export default MultiStepForm;

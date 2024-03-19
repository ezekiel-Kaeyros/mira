import { Button } from '@/app/components/button/Button';
import { NEXT_STEP } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';
import React from 'react';
import FifthStep from '../fifth-step/FifthStep';
import FourthStep from '../fourth-step/FourthStep';

type InitialStepProps = {
  initialStepTranslation: {
    title: string;
    subTitle: string;
    secondSubTitle: string;
    list: {
      firstItem: string;
      secondItem: string;
      thirdItem: string;
    };
    description: string;
    report: string;
  };
};

const InitialStep: React.FC<InitialStepProps> = ({
  initialStepTranslation,
}) => {
  const { step, dispatch } = useFormContext();
  return (
    <div className="w-full">
      <h1 className="mb-2 font-bold">{initialStepTranslation?.title}</h1>
      <h3 className="my-2">{initialStepTranslation?.subTitle}</h3>

      <div className="mt-4 ml-2">
        <h3 className="lg:ml-2 ml-4">
          {initialStepTranslation?.secondSubTitle}
        </h3>
        <ul className="list-disc ml-8 my-4">
          <li>{initialStepTranslation?.list?.firstItem}</li>
          <li>{initialStepTranslation?.list?.secondItem}</li>
          <li>{initialStepTranslation?.list?.thirdItem}</li>
        </ul>
        <h3>{initialStepTranslation?.description}</h3>
      </div>
      <Button onClick={() => dispatch({ type: NEXT_STEP, payload: 'data' })}>
        {initialStepTranslation?.report}
      </Button>
    </div>
  );
};

export default InitialStep;

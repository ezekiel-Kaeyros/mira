import { Button } from '@/app/components/button/Button';
import { NEXT_STEP, PREV_STEP, SUBMIT_FORM } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';
import { getFormStep } from '@/cookies/cookies';
import React from 'react';

type ButtonGroupProps = {
  buttonTranslation: {
    next: string;
    prev: string;
    submit: string;
  };
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttonTranslation }) => {
  const { formErrors, racismType, dispatch } = useFormContext();
  let stepFromCookies = getFormStep();

  return (
    <div>
      {stepFromCookies !== 1 ? (
        <div className="flex space-x-0 md:space-x-16  flex-row  justify-between items-center w-full">
          <Button
            variant="default"
            onClick={() => dispatch({ type: PREV_STEP })}
          >
            {buttonTranslation?.prev || 'Prev'}
          </Button>
          {stepFromCookies === 6 ? (
            <Button
              variant={`${formErrors ? 'disabled' : 'default'}`}
              onClick={() => dispatch({ type: SUBMIT_FORM, payload: 'DATA 2' })}
            >
              {buttonTranslation?.submit || 'Submit'}
            </Button>
          ) : (
            <Button
              variant={`${formErrors ? 'disabled' : 'default'}`}
              disabled={formErrors && true}
              form={`${
                stepFromCookies === 3
                  ? 'firstForm'
                  : stepFromCookies === 4
                  ? 'secondForm'
                  : 'thirdForm'
              }`}
            >
              {buttonTranslation?.next || 'Next'}
            </Button>
          )}
        </div>
      ) : (
        <>
          {formErrors ? (
            ''
          ) : (
            <Button
              disabled={formErrors && true}
              variant={`${formErrors ? 'disabled' : 'default'}`}
            >
              {buttonTranslation?.next || 'Next'}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ButtonGroup;

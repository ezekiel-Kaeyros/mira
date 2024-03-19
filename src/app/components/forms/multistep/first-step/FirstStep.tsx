import React, { useEffect, useState } from 'react';

import RadioGroup from '../../radio/RadioGroup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useFormContext } from '@/app/hooks/useFormContext';
import {
  FORM_ERRORS,
  LAST_STEP,
  NEXT_STEP,
  REPORTER,
} from '@/app/context/actions';
import { getFormCookies, setFormCookies } from '@/cookies/cookies';
import InputField from '../../text-field/InputField';
import RadioSingle from '../../radio/RadioSingle';
import Disclaimer from './Disclaimer';
import Checkbox from '../../checkbox/Checkbox';
import { FIRST_FORM_DATA } from '@/cookies/cookies.d';
import { FirstFormValues, FirstStepProps } from './firstStep.d';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const FirstStep: React.FC<FirstStepProps> = ({ firstStepTranslation }) => {
  const { dispatch, reportingPerson, isEditing } = useFormContext();
  // Declaring states to hold questions
  const [firstQuestion, setFirstQuestion] = useState<string>();
  const [secondQuestion, setSecondQuestion] = useState<string>();
  const [thirdQuestion, setThirdQuestion] = useState<string>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FirstFormValues>();

  // Watching fields on every change
  let age = watch('age');
  let gender = watch('gender');
  let identity = watch('identity');
  let disclaimer = watch('disclaimer');
  let numberOfEmployees = watch('numberOfEmployees');
  let organizationType = watch('organizationType');
  let organizationTypeFreeField = watch('organizationType');
  let genderFreeField = watch('genderFreeField');
  let formValues = getFormCookies(FIRST_FORM_DATA);

  useEffect(() => {
    // Check if there is errors

    if (identity) {
      // Dispatching selected identity
      dispatch({
        type: REPORTER,
        payload:
          identity === firstStepTranslation?.whoIsAffected?.fourthOption
            ? 'organization'
            : identity === firstStepTranslation?.whoIsAffected?.thirdOption
            ? 'onBehalf'
            : identity === firstStepTranslation?.whoIsAffected?.secondOption
            ? 'andere'
            : 'myself',
      });
      dispatch({ type: FORM_ERRORS, payload: false });

      setFirstQuestion(firstStepTranslation?.whoIsAffected?.title);

      // Setting Second selected question
      reportingPerson === 'onBehalf' || reportingPerson === 'andere'
        ? setSecondQuestion(
            firstStepTranslation?.whoIsAffectedOnBehalfQuestion.firstOption
          )
        : reportingPerson === 'organization'
        ? setSecondQuestion(firstStepTranslation?.organizationTypeQuestion)
        : setSecondQuestion(
            firstStepTranslation?.howOldAreYouQuestion?.secondQuestion
          );

      // Setting selected Third question
      reportingPerson === 'onBehalf' || reportingPerson === 'andere'
        ? setThirdQuestion(
            firstStepTranslation?.whoIsAffectedOnBehalfQuestion.secondQuestion
          )
        : reportingPerson === 'organization'
        ? setThirdQuestion(firstStepTranslation?.numberOfEmployeesQuestion)
        : setThirdQuestion(
            firstStepTranslation?.howOldAreYouQuestion?.secondQuestion
          );
    } else {
      dispatch({ type: FORM_ERRORS, payload: true });
    }

    // Setting default values if exists in cookies

    if (formValues && !identity) {
      age !== formValues?.age && setValue('age', formValues?.age);

      identity !== formValues?.identity &&
        setValue('identity', formValues?.identity);

      gender !== formValues?.gender && setValue('gender', formValues?.gender);

      disclaimer !== formValues?.disclaimer &&
        setValue('disclaimer', formValues?.disclaimer);

      organizationType !== formValues?.organizationType &&
        setValue('organizationType', formValues?.organizationType);

      organizationType !== formValues?.organizationType &&
        setValue('organizationType', formValues?.organizationType);

      numberOfEmployees !== formValues?.numberOfEmployees &&
        setValue('numberOfEmployees', formValues?.numberOfEmployees);
      genderFreeField !== formValues?.genderFreeField &&
        setValue('genderFreeField', formValues?.genderFreeField);

      organizationTypeFreeField !== formValues?.organizationTypeFreeField &&
        setValue(
          'organizationTypeFreeField',
          formValues?.organizationTypeFreeField
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    reportingPerson,
    identity,
    formValues?.age,
    formValues?.identity,
    formValues?.gender,
    formValues?.identity,
    formValues?.disclaimer,
    formValues?.organizationType,
    formValues?.organizationTypeFreeField,
    formValues?.numberOfEmployees,
    formValues?.genderFreeField,
  ]);

  // Triggered when submitting form
  const onSubmit: SubmitHandler<FirstFormValues> = (data) => {
    let dataWithQuestion = {
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      ...data,
    };
    setFormCookies(dataWithQuestion, FIRST_FORM_DATA);

    isEditing && reportingPerson === 'myself'
      ? dispatch({ type: LAST_STEP, payload: 5 })
      : dispatch({ type: NEXT_STEP, payload: 'DATA 1' });
  };

  // Scroll ton top
  useScrollOnTop();

  return (
    <form id="firstForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="font-bold mb-4">Step 1/4</div>
      <div>
        <h1 className="font-bold mb-2">
          {firstStepTranslation?.whoIsAffected?.title}
        </h1>
        <RadioSingle
          id="identity1"
          label={firstStepTranslation?.whoIsAffected?.firstOption}
          name="identity"
          props={register('identity', { required: true })}
          value={firstStepTranslation?.whoIsAffected?.firstOption}
        />

        <RadioSingle
          id="identity2"
          label={firstStepTranslation?.whoIsAffected?.secondOption}
          name="identity"
          props={register('identity', { required: true })}
          value={firstStepTranslation?.whoIsAffected?.secondOption}
        />

        <RadioSingle
          id="identity3"
          label={firstStepTranslation?.whoIsAffected?.thirdOption}
          name="identity"
          props={register('identity', { required: true })}
          value={firstStepTranslation?.whoIsAffected?.thirdOption}
        />

        {/* Display the disclaimer berfor proceeding */}

        {identity === firstStepTranslation?.whoIsAffected?.thirdOption && (
          <div className="ml-4 my-4">
            <Disclaimer
              disclaimerTranslation={firstStepTranslation?.disclaimer}
            />
            <div>
              <Checkbox
                label={firstStepTranslation?.disclaimerAgreement}
                id="disclaimer"
                name="disclaimer"
                props={register('disclaimer')}
                value=""
                variant="black"
              />
            </div>
          </div>
        )}

        <RadioSingle
          id="identity4"
          label={firstStepTranslation?.whoIsAffected?.fourthOption}
          name="identity"
          props={register('identity', { required: true })}
          value={firstStepTranslation?.whoIsAffected?.fourthOption}
        />

        <p>
          {errors?.identity && (
            <span className="text-sm text-red-600">
              {firstStepTranslation?.whoIsAffected?.fieldIsRequired}
            </span>
          )}
        </p>
      </div>
      {/* This part changes dynamically */}

      {identity === firstStepTranslation?.whoIsAffected?.fourthOption ? (
        // Organization form
        <>
          <div className="mt-4">
            <RadioGroup
              props={register('organizationType')}
              options={firstStepTranslation?.data?.organizationTypeData}
              title={firstStepTranslation?.organizationTypeQuestion}
            />
            {/* Free field */}
            {organizationType === firstStepTranslation?.freeField && (
              <div className="ml-4">
                <InputField
                  name="organizationTypeFreeField"
                  props={register('organizationTypeFreeField', {
                    required: true,
                    minLength: 3,
                  })}
                />
                <p>
                  {errors?.organizationTypeFreeField && (
                    <span className="text-sm text-red-600">
                      {firstStepTranslation?.whoIsAffected?.fieldIsRequired}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
          <div className="my-4">
            <RadioGroup
              props={register('numberOfEmployees')}
              options={firstStepTranslation?.data?.numberOfEmployees}
              title={firstStepTranslation?.numberOfEmployeesQuestion}
            />
          </div>
        </>
      ) : (
        // End of organization form
        <>
          {disclaimer &&
          identity === firstStepTranslation?.whoIsAffected?.thirdOption ? (
            // Form where the disclaimer is ticked
            <>
              <div className="my-6">
                <RadioGroup
                  props={register('gender')}
                  options={firstStepTranslation?.data?.genders}
                  title={
                    firstStepTranslation?.whoIsAffectedOnBehalfQuestion
                      ?.firstOption
                  }
                />
                {gender === 'Selbstbezeichnung' ||
                  (gender === 'Self-identification' && (
                    <div className="ml-4">
                      <InputField
                        error={errors?.genderFreeField ? true : false}
                        name="genderFreeField"
                        props={register('genderFreeField', {
                          required: true,
                          minLength: 3,
                        })}
                      />
                    </div>
                  ))}
              </div>
              <div>
                <RadioGroup
                  props={register('age')}
                  options={firstStepTranslation?.data?.age}
                  title={
                    firstStepTranslation?.whoIsAffectedOnBehalfQuestion
                      ?.secondQuestion
                  }
                />
              </div>
            </>
          ) : (
            <>
              {identity === firstStepTranslation?.whoIsAffected?.thirdOption ? (
                ''
              ) : (
                <>
                  {identity ===
                  firstStepTranslation?.whoIsAffected?.secondOption ? (
                    <>
                      <div className="my-6">
                        <RadioGroup
                          props={register('gender')}
                          options={firstStepTranslation?.data?.genders}
                          title={
                            firstStepTranslation?.whoIsAffectedOnBehalfQuestion
                              ?.firstOption
                          }
                        />

                        {gender === 'Selbstbezeichnung' ||
                          (gender === 'Self-identification' && (
                            <div className="ml-4">
                              <InputField
                                error={errors?.genderFreeField ? true : false}
                                name="genderFreeField"
                                props={register('genderFreeField', {
                                  required: true,
                                  minLength: 3,
                                })}
                              />
                            </div>
                          ))}
                      </div>
                      <div>
                        <RadioGroup
                          props={register('age')}
                          options={firstStepTranslation?.data?.age}
                          title={
                            firstStepTranslation?.whoIsAffectedOnBehalfQuestion
                              ?.secondQuestion
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="my-6">
                        <RadioGroup
                          props={register('gender')}
                          options={firstStepTranslation?.data?.genders}
                          title={
                            firstStepTranslation?.howOldAreYouQuestion
                              ?.secondQuestion
                          }
                        />
                        {gender === 'Selbstbezeichnung' ||
                          (gender === 'Self-identification' && (
                            <div className="ml-4">
                              <InputField
                                error={errors?.genderFreeField ? true : false}
                                name="genderFreeField"
                                props={register('genderFreeField', {
                                  required: true,
                                  minLength: 3,
                                })}
                              />
                            </div>
                          ))}
                      </div>
                      <div>
                        <RadioGroup
                          props={register('age')}
                          options={firstStepTranslation?.data?.age}
                          title={
                            firstStepTranslation?.howOldAreYouQuestion
                              ?.firstQuestion
                          }
                        />
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}

      {/* End of the part that changes */}
    </form>
  );
};

export default FirstStep;

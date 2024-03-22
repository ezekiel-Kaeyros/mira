import React, { useEffect, useRef, useState } from 'react';
import EditIcon from './icons/EditIcon';
import { Button } from '@/app/components/button/Button';
import { useFormContext } from '@/app/hooks/useFormContext';
import { EDIT_STEP, FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { clearFormCookies, getFormCookies } from '@/cookies/cookies';
import {
  FIRST_FORM_DATA,
  SECOND_FORM_DATA,
  THIRD_FORM_DATA,
} from '@/cookies/cookies.d';

import {
  FirstForm,
  FourthFormValues,
  FourthStepProps,
  SecondForm,
  ThirdForm,
} from './fourthStep';
import QuestionAnswerComponent from './question-answer-component/QuestionAnswerComponent';
import dayjs from 'dayjs';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';
import CaptchaCheckbox from '@/app/components/captcha/captcha-checkbox/CaptchaCheckbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import { verifyCaptchaAction } from '@/app/components/captcha/Captcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReportService from '@/services/reportService';

const FourthStep: React.FC<FourthStepProps> = ({ fourthStepTranslation }) => {
  const { dispatch, formErrors } = useFormContext();

  const [firstStep, setFirstStep] = useState<FirstForm>();
  const [secondStep, setSecondStep] = useState<SecondForm>();
  const [thirdStep, setThirdStep] = useState<ThirdForm>();

  const [captchLoading, setCaptchaLoading] = useState<boolean>(true);
  const [verified, setVerified] = useState<any>(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FourthFormValues>();

  let captcha: string = watch('captcha');

  useEffect(() => {
    setFirstStep(getFormCookies(FIRST_FORM_DATA));
    setSecondStep(getFormCookies(SECOND_FORM_DATA));
    setThirdStep(getFormCookies(THIRD_FORM_DATA));

    captcha && handleCaptcha();

    console.log('verified response', captcha);

    captcha
      ? dispatch({ type: FORM_ERRORS, payload: false })
      : dispatch({ type: FORM_ERRORS, payload: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verified, captcha]);

  useScrollOnTop();

  // Captch check function

  const handleCaptcha = async () => {
    // Captcha verification
    // if the component is not mounted yet
    if (!executeRecaptcha) {
      return;
    }
    // receive a token

    try {
      const token = await executeRecaptcha('onSubmit');
      console.log('token', token);

      // validate the token via the server action we've created previously

      const verified1 = await verifyCaptchaAction(token);
      console.log('verified1', verified1);

      verified && setVerified(verified);

      setCaptchaLoading(false);
    } catch (error) {
      console.log(error);
      setCaptchaLoading(false);
    }
  };
  const onSubmit: SubmitHandler<any> = async () => {
    dispatch({ type: FORM_ERRORS, payload: true });
    const firsForm: {
      identity: string;
      gender: string;
      numberOfEmployees: string;
      organizationType: string;
      organizationTypeFreeField: string;
      age: string;

      genderFreeField: string;
    } = getFormCookies(FIRST_FORM_DATA);

    const secondForm: {
      happenedForALongPeriod: string;
      location: string;
      happenedOnline: string;
      areaLocation: string[];
      otherLocation: string;

      dateState: string;
      dateRangeState: string[];
    } = getFormCookies(SECOND_FORM_DATA);

    const thirdForm: {
      typeOfRacism: string;
      otherFormOfRacism: string;
      description: string;
      racismManifestation: string;
      racismManifestationIWasDisadvantaged: string;
      racismManifestationIWasDisadvantagedFreeField: string;
      isItAnotherFormOfDiscrimination: string;
      newFormOfRacismYes: string;
      newFormOfRacismYesFreeField: string;
      haveYouTakenMeasures: string;
      haveYouTakenMeasuresYes: string;
      haveYouTakenMeasuresYesFreeField: string;
    } = getFormCookies(THIRD_FORM_DATA);

    let identity = firsForm.identity;
    let gender = firsForm.gender;
    let numberOfEmployees = firsForm.numberOfEmployees;
    let organizationType = firsForm.organizationType;
    let organizationTypeFreeField = firsForm.organizationTypeFreeField;
    let age = firsForm.age;

    let genderFreeField = firsForm.genderFreeField;
    let happenedForALongPeriod = secondForm.happenedForALongPeriod;
    let location = secondForm.location;
    let happenedOnline = secondForm.happenedOnline;
    let areaLocation = secondForm.areaLocation;
    let otherLocation = secondForm.otherLocation;

    let dateState = secondForm.dateState;
    let dateRangeState = secondForm.dateRangeState;
    let typeOfRacism = thirdForm.typeOfRacism;
    let otherFormOfRacism = thirdForm.otherFormOfRacism;
    let description = thirdForm.description;
    let racismManifestation = thirdForm.racismManifestation;
    let racismManifestationIWasDisadvantaged =
      thirdForm.racismManifestationIWasDisadvantaged;
    let racismManifestationIWasDisadvantagedFreeField =
      thirdForm.racismManifestationIWasDisadvantagedFreeField;
    let isItAnotherFormOfDiscrimination =
      thirdForm.isItAnotherFormOfDiscrimination;
    let newFormOfRacismYes = thirdForm.newFormOfRacismYes;
    let newFormOfRacismYesFreeField = thirdForm.newFormOfRacismYesFreeField;
    let haveYouTakenMeasures = thirdForm.haveYouTakenMeasures;
    let haveYouTakenMeasuresYes = thirdForm.haveYouTakenMeasuresYes;
    let haveYouTakenMeasuresYesFreeField =
      thirdForm.haveYouTakenMeasuresYesFreeField;
    const report = {
      identity,
      gender,
      numberOfEmployees,
      organizationType,
      organizationTypeFreeField,
      age,
      genderFreeField,
      happenedForALongPeriod,
      location,
      happenedOnline,
      areaLocation,
      otherLocation,
      dateState,
      dateRangeState,
      typeOfRacism,
      otherFormOfRacism,
      description,
      racismManifestation,
      racismManifestationIWasDisadvantaged,
      racismManifestationIWasDisadvantagedFreeField,
      isItAnotherFormOfDiscrimination,
      newFormOfRacismYes,
      newFormOfRacismYesFreeField,
      haveYouTakenMeasuresYes,
      haveYouTakenMeasures,
      haveYouTakenMeasuresYesFreeField
    };
    console.log(
   'report',report
    );

       const response = new ReportService()
         .sendReport(report)
         .then((result) => {
           if (result.status === 201 || result.status === 200) {
             console.log('Successfull');
             clearFormCookies();
           dispatch({ type: NEXT_STEP, payload: '' });
           } else {
             dispatch({ type: FORM_ERRORS, payload: false });
             console.log('failed');
             // setCaptchaLoading(false);
             throw new Error('Fetching error occured, please reload');
           }
         })
         .catch((error) => {
           console.log(error);
           // setCaptchaLoading(false);
           dispatch({ type: FORM_ERRORS, payload: false });
           throw new Error('Fetching error occured, please reload');
         });
  
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold text-2xl">{fourthStepTranslation?.title}</h1>
      <div className="flex items-center my-4">
        <span className="mr-2">{fourthStepTranslation?.link}</span>{' '}
        {fourthStepTranslation?.firstParagraph}
        <div
          className="underline text-orange-700 mx-2 cursor-pointer"
          onClick={() => dispatch({ type: EDIT_STEP, payload: 3 })}
        >
          {fourthStepTranslation?.steps.edit}
        </div>
      </div>
      <div>
        <div className="my-4">
          <h1 className="font-bold text-2xl underline-offset-4 underline mb-2">
            {fourthStepTranslation?.steps.identity}
          </h1>
          <div className="flex flex-col ">
            <QuestionAnswerComponent
              question={firstStep?.firstQuestion}
              answer={firstStep?.identity}
            />

            {firstStep?.gender && (
              <QuestionAnswerComponent
                question={firstStep?.secondQuestion}
                answer={[firstStep?.gender, firstStep?.genderFreeField]}
              />
            )}

            {firstStep?.organizationType && (
              <QuestionAnswerComponent
                question={firstStep?.secondQuestion}
                answer={[
                  firstStep?.organizationType,
                  firstStep?.organizationTypeFreeField,
                ]}
              />
            )}
            {firstStep?.age && (
              <QuestionAnswerComponent
                question={firstStep?.thirdQuestion}
                answer={firstStep?.age}
              />
            )}
            {firstStep?.numberOfEmployees && (
              <QuestionAnswerComponent
                question={firstStep?.thirdQuestion}
                answer={firstStep?.numberOfEmployees}
              />
            )}
          </div>
        </div>
        <div className="my-4">
          <h1 className="font-bold text-2xl mb-2 underline-offset-4 underline">
            {fourthStepTranslation?.steps.placeTime}
          </h1>
          <div className="flex flex-col">
            {!secondStep?.dateRangeState && secondStep?.dateState && (
              <QuestionAnswerComponent
                question={secondStep?.firstQuestion}
                answer={dayjs(secondStep?.dateState).format(
                  'DD.MM.YYYY T HH:mm:ssZ[Z]'
                )}
              />
            )}

            {secondStep?.happenedOnline && (
              <QuestionAnswerComponent
                question={secondStep?.firstQuestion}
                answer={secondStep?.happenedOnline}
              />
            )}
            {/* Dynamic here */}
            {secondStep?.dateRangeState && (
              <QuestionAnswerComponent
                question={secondStep?.firstQuestion}
                answer={[
                  dayjs(secondStep?.dateRangeState[0]).format(
                    'DD.MM.YYYY T HH:mm:ssZ[Z]'
                  ),
                  dayjs(secondStep?.dateRangeState[1]).format(
                    'DD.MM.YYYY T HH:mm:ssZ[Z]'
                  ),
                ]}
              />
            )}
            {secondStep?.location && (
              <QuestionAnswerComponent
                question={secondStep?.secondQuestion}
                answer={secondStep?.location}
              />
            )}
            {secondStep?.areaLocation && (
              <QuestionAnswerComponent
                question={secondStep?.thirdQuestion}
                answer={secondStep?.areaLocation}
              />
            )}
          </div>
        </div>
        <div className="my-4">
          <h1 className="font-bold text-2xl mb-2 underline-offset-4 underline">
            {fourthStepTranslation?.steps.description}
          </h1>
          <div className="flex flex-col flex-wrap ">
            {thirdStep?.typeOfRacism && (
              <QuestionAnswerComponent
                question={thirdStep?.firstQuestion}
                answer={thirdStep?.typeOfRacism}
              />
            )}
            <QuestionAnswerComponent
              question={thirdStep?.secondQuestion}
              answer={thirdStep?.description}
            />
            {thirdStep?.racismManifestation && (
              <QuestionAnswerComponent
                question={thirdStep?.thirdQuestion}
                answer={[
                  thirdStep?.racismManifestation,
                  thirdStep?.racismManifestationIWasDisadvantaged,
                  thirdStep?.racismManifestationIWasDisadvantagedFreeField,
                ]}
              />
            )}
            {thirdStep?.isItAnotherFormOfDiscrimination && (
              <QuestionAnswerComponent
                question={thirdStep?.fourthQuestion}
                answer={[
                  thirdStep?.isItAnotherFormOfDiscrimination,
                  thirdStep?.newFormOfRacismYes,
                  thirdStep?.newFormOfRacismYesFreeField,
                ]}
              />
            )}

            {thirdStep?.haveYouTakenMeasures && (
              <QuestionAnswerComponent
                question={thirdStep?.fifthQuestion}
                answer={[
                  thirdStep?.haveYouTakenMeasures,
                  thirdStep?.haveYouTakenMeasuresYes,
                  thirdStep?.haveYouTakenMeasuresYesFreeField,
                ]}
              />
            )}
          </div>
        </div>
      </div>
      {/* Captcha button */}

      <CaptchaCheckbox
        id="captcha"
        loading={captchLoading}
        checked={captcha ? true : false}
        name="captcha"
        props={register('captcha')}
        value="captcha"
        label={fourthStepTranslation?.captcha}
      />

      <div className="ml-auto max-w-xs mt-24">
        <div>{fourthStepTranslation?.acceptance}</div>
        <Button
          disabled={formErrors ? true : false}
          variant={formErrors ? 'disabled' : 'default'}
          // onClick={() => dispatch({ type: NEXT_STEP, payload: '' })}
        >
          {fourthStepTranslation?.submit}
        </Button>
      </div>
    </form>
  );
};

export default FourthStep;

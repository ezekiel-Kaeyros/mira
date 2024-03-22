import { DatePicker } from 'antd';
import 'dayjs/locale/de';
import locale from 'antd/es/date-picker/locale/de_DE';
import React, { useEffect, useState } from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useFormContext } from '@/app/hooks/useFormContext';
import { FORM_ERRORS, NEXT_STEP } from '@/app/context/actions';
import { getFormCookies, setFormCookies } from '@/cookies/cookies';
import InputField from '../../text-field/InputField';
import { SECOND_FORM_DATA } from '@/cookies/cookies.d';
import dayjs from 'dayjs';
import { SecondFormValues, SecondStepProps } from './secondStep';
import AutoComplete from '../../auto-complete/AutoComplete';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const { RangePicker } = DatePicker;

const dateFormat = 'DD.MM.YYYY';

const SecondStep: React.FC<SecondStepProps> = ({ secondStepTranslation }) => {
  const [date, setDate] = useState<any>(new Date());
  const [dateRange, setDateRange] = useState<any>();

  // defining default value

  // Declaring states to hold questions
  const [firstQuestion] = useState<string>(
    secondStepTranslation?.whenDidIncidentTakePlace
  );
  const [secondQuestion] = useState<string>(
    secondStepTranslation?.inWhichPlace
  );
  const [thirdQuestion, setThirdQuestion] = useState<string>();
  const [location, setLocation] = useState<string>('');

  const { dispatch, reportingPerson } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SecondFormValues>();

  // Watching fields on every change
  let happenedForALongPeriod = watch('happenedForALongPeriod');
  let happenedOnline = watch('happenedOnline');
  let areaLocationField: string[] = watch('areaLocation');
  let otherLocation = watch('otherLocation');

  function onChange(date: any, dateString: any) {
    setDate(date);
  }

  function disabledDate(current: any) {
    // Disable dates after today
    return current && current.isAfter(dayjs().endOf('day'));
  }

  // On range picker change

  function onDateRangeChange(date: any, dateString: any) {
    setDateRange(date);
  }

  // Handle default value

  let formValues = getFormCookies(SECOND_FORM_DATA);

  useEffect(() => {
    if (
      formValues &&
      !happenedForALongPeriod &&
      !location &&
      !otherLocation &&
      !happenedOnline
    ) {
      // Setting default date here and daterange state

      happenedForALongPeriod !== formValues?.happenedForALongPeriod &&
        setValue('happenedForALongPeriod', formValues?.happenedForALongPeriod);

      otherLocation !== formValues?.otherLocation &&
        setValue('otherLocation', formValues?.otherLocation);

      areaLocationField !== formValues?.areaLocation &&
        setValue('areaLocation', formValues?.areaLocation);

      happenedOnline !== formValues?.happenedOnline &&
        setValue('happenedOnline', formValues?.happenedOnline);
    }

    reportingPerson !== 'organization' &&
      setThirdQuestion(secondStepTranslation?.whichSocialSphere);

    dispatch({ type: FORM_ERRORS, payload: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formValues?.happenedOnline,
    formValues?.happenedForALongPeriod,
    formValues?.otherLocation,
    formValues?.areaLocationField,
    formValues?.location,
    location,
    dateRange,
  ]);

  // Autocomplete selected location

  const handleOnSelect = (item: any) => {
    // the item selected
    setLocation(item?.name);
  };

  // Triggered when submitting form
  const onSubmit: SubmitHandler<SecondFormValues> = (data) => {
    let dateState = dayjs(date);
    let dateRangeState = dateRange;

    let dataWithQuestion = {
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      ...data,
      location,
      dateState,
      dateRangeState,
    };

    setFormCookies(dataWithQuestion, SECOND_FORM_DATA);
    dispatch({ type: NEXT_STEP, payload: '' });
    console.log('dataWithQuestion2', dataWithQuestion);
  };

  useScrollOnTop();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="secondForm"
      className="h-full w-full"
    >
      <div className="font-bold mb-4">Step 2/4</div>
      <div className="w-full">
        <div className="font-bold mb-4">
          {secondStepTranslation?.whenDidIncidentTakePlace}
        </div>
        <DatePicker
          locale={locale}
          format={dateFormat}
          disabled={happenedForALongPeriod ? true : false}
          className="w-full py-3 border border-gray-300"
          onChange={onChange}
          disabledDate={disabledDate}
          defaultValue={
            formValues?.dateState
              ? dayjs(formValues?.dateState)
              : dayjs(new Date())
          }
        />
      </div>
      <div className={`w-full mt-4 mb-2`}>
        <Checkbox
          variant="black"
          id="happenedForALongPeriod"
          name="happenedForALongPeriod"
          props={register('happenedForALongPeriod')}
          value={secondStepTranslation?.happenedOverALongPeriod}
          label={secondStepTranslation?.happenedOverALongPeriod}
        />
      </div>
      {/* Range picker */}

      {happenedForALongPeriod && (
        <div className="mt-2 mb-8">
          <RangePicker
            format={dateFormat}
            locale={locale}
            onChange={onDateRangeChange}
            disabledDate={disabledDate}
            defaultValue={
              formValues?.dateRangeState && [
                dayjs(formValues?.dateRangeState[0]),
                dayjs(formValues?.dateRangeState[1]),
              ]
            }
            className="w-full py-3 border border-gray-300"
          />
        </div>
      )}

      <div className="w-full my-4">
        <h1 className="font-bold">{secondStepTranslation?.inWhichPlace}</h1>
        <h1 className="text-sm mb-4">
          {secondStepTranslation?.inWhichPlaceHint}
        </h1>
        <AutoComplete handleOnSelect={handleOnSelect} />
      </div>

      <div className="w-full">
        <Checkbox
          variant="black"
          id="happenedOnline"
          name="happenedOnline"
          props={register('happenedOnline')}
          value={secondStepTranslation?.itHappenedOnline}
          label={secondStepTranslation?.itHappenedOnline}
        />
      </div>

      {/* Filter for organization */}

      {reportingPerson !== 'organization' && (
        <div className="my-4">
          <h1 className="font-bold mb-4">
            {secondStepTranslation?.whichSocialSphere}
          </h1>
          <p className="text-sm text-red-600">
            {errors?.areaLocation && secondStepTranslation?.required}
          </p>
          {secondStepTranslation?.data?.choices?.map((choice: any) => (
            <Checkbox
              variant="black"
              key={choice?.iD}
              props={register('areaLocation', { required: true })}
              name={choice.name}
              id={choice.id}
              examples={choice?.examples}
              value={choice?.value}
              label={choice?.label}
            />
          ))}
          {areaLocationField &&
            areaLocationField?.includes(secondStepTranslation?.freeField) && (
              <div className="my-4 ml-4">
                <InputField
                  name="otherLocation"
                  props={register('otherLocation')}
                />
              </div>
            )}
        </div>
      )}
    </form>
  );
};

export default SecondStep;

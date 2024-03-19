import React, { useEffect, useState } from 'react';
import SelectField from '../../select-field/SelectField';
import TextArea from '../../text-area/TextArea';
import RadioGroup from '../../radio/RadioGroup';
import { useFormContext } from '@/app/hooks/useFormContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import { FORM_ERRORS, NEXT_STEP, RACISM_TYPE } from '@/app/context/actions';
import { getFormCookies, setFormCookies } from '@/cookies/cookies';
import RadioSingle from '../../radio/RadioSingle';
import Checkbox from '../../checkbox/Checkbox';
import { THIRD_FORM_DATA } from '@/cookies/cookies.d';
import { ThirdFormValues, ThirdStepProps } from './thirdStep';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

const ThirdStep: React.FC<ThirdStepProps> = ({ thirdStepTranslation }) => {
  const { dispatch, reportingPerson } = useFormContext();

  // Declaring states to hold questions
  const [firstQuestion] = useState<string>(
    thirdStepTranslation?.iThinkItIsAbout
  );
  const [secondQuestion] = useState<string>(
    thirdStepTranslation?.normal?.black?.description?.title
  );
  const [thirdQuestion, setThirdQuestion] = useState<string>();
  const [fourthQuestion] = useState<string>(
    thirdStepTranslation?.normal.black.otherFormOfDiscrimination.title
  );
  const [fifthQuestion, setFifthQuestion] = useState<string>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ThirdFormValues>();

  let typeOfRacism = watch('typeOfRacism');

  let isItAnotherFormOfDiscrimination = watch(
    'isItAnotherFormOfDiscrimination'
  );
  let description = watch('description');
  let newFormOfRacismYes = watch('newFormOfRacismYes');
  let haveYouTakenMeasures = watch('haveYouTakenMeasures');
  let haveYouTakenMeasuresYes = watch('haveYouTakenMeasuresYes');
  let racismManifestation = watch('racismManifestation');
  let newFormOfRacismYesFreeField = watch('newFormOfRacismYesFreeField');
  let haveYouTakenMeasuresYesFreeField = watch(
    'haveYouTakenMeasuresYesFreeField'
  );
  let racismManifestationIWasDisadvantaged = watch(
    'racismManifestationIWasDisadvantaged'
  );
  let racismManifestationIWasDisadvantagedFreeField = watch(
    'racismManifestationIWasDisadvantagedFreeField'
  );
  let otherFormOfRacism = watch('otherFormOfRacism');
  let agreement = watch('agreement');

  let formValues: ThirdFormValues = getFormCookies(THIRD_FORM_DATA);

  useEffect(() => {
    dispatch({ type: FORM_ERRORS, payload: false });
    // Setting the third selected question and selected type
    if (
      typeOfRacism === 'Antiasiatischen Rassismus' ||
      typeOfRacism === 'Anti-Asian Racism'
    ) {
      setValue('otherFormOfRacism', '');
      dispatch({ type: RACISM_TYPE, payload: 'asian' });
      setThirdQuestion(
        `Auf welche Art und Weise hat sich die Diskriminierung aufgrund der (zugeschriebenen) asiatischen Herkunft geäußert?`
      );
    } else if (
      typeOfRacism === 'Anti-Schwarzen Rassismus' ||
      typeOfRacism === 'Anti-Black Racism'
    ) {
      setValue('otherFormOfRacism', '');

      dispatch({ type: RACISM_TYPE, payload: 'black' });

      setThirdQuestion(
        'Auf welche Art und Weise hat sich die Diskriminierung aufgrund Des Schwarz-Seins der Person gegenüber geäußert ?*'
      );
    } else {
      // Setting values to empty string when freeText Field is selected
      if (
        typeOfRacism === 'Not Sure' ||
        typeOfRacism === 'Ich bin mir nicht sicher'
      ) {
        setValue('otherFormOfRacism', '');
      }

      // For have you reported field setting values of other fieds to empty when No is selected

      haveYouTakenMeasures === 'Nein' ||
        (haveYouTakenMeasures === 'No' &&
          setValue('haveYouTakenMeasuresYes', ''));

      dispatch({ type: RACISM_TYPE, payload: 'other' });

      setThirdQuestion(
        'Auf welche Art und Weise hat sich die Diskriminierung der Person gegenüber geäußert ?*'
      );
    }

    if (formValues && !typeOfRacism && !haveYouTakenMeasures) {
      agreement !== formValues?.agreement &&
        setValue('agreement', formValues?.agreement);
      description !== formValues?.description &&
        setValue('description', formValues?.description);
      haveYouTakenMeasures !== formValues?.haveYouTakenMeasures &&
        setValue('haveYouTakenMeasures', formValues?.haveYouTakenMeasures);
      haveYouTakenMeasuresYes !== formValues?.haveYouTakenMeasuresYes &&
        setValue(
          'haveYouTakenMeasuresYes',
          formValues?.haveYouTakenMeasuresYes
        );
      haveYouTakenMeasuresYesFreeField !==
        formValues?.haveYouTakenMeasuresYesFreeField &&
        setValue(
          'haveYouTakenMeasuresYesFreeField',
          formValues?.haveYouTakenMeasuresYesFreeField
        );
      isItAnotherFormOfDiscrimination !==
        formValues?.isItAnotherFormOfDiscrimination &&
        setValue(
          'isItAnotherFormOfDiscrimination',
          formValues?.isItAnotherFormOfDiscrimination
        );
      newFormOfRacismYes !== formValues?.newFormOfRacismYes &&
        setValue('newFormOfRacismYes', formValues?.newFormOfRacismYes);
      newFormOfRacismYesFreeField !== formValues?.newFormOfRacismYesFreeField &&
        setValue(
          'newFormOfRacismYesFreeField',
          formValues?.newFormOfRacismYesFreeField
        );
      racismManifestation !== formValues?.racismManifestation &&
        setValue('racismManifestation', formValues?.racismManifestation);
      racismManifestationIWasDisadvantaged !==
        formValues?.racismManifestationIWasDisadvantaged &&
        setValue(
          'racismManifestationIWasDisadvantaged',
          formValues?.racismManifestationIWasDisadvantaged
        );
      racismManifestationIWasDisadvantagedFreeField !==
        formValues?.racismManifestationIWasDisadvantagedFreeField &&
        setValue(
          'racismManifestationIWasDisadvantagedFreeField',
          formValues?.racismManifestationIWasDisadvantagedFreeField
        );
      otherFormOfRacism !== formValues?.otherFormOfRacism &&
        setValue('otherFormOfRacism', formValues?.otherFormOfRacism);
      typeOfRacism !== formValues?.typeOfRacism &&
        setValue('typeOfRacism', formValues?.typeOfRacism);
    }

    // Setting fifth selected question
    reportingPerson === 'onBehalf' || reportingPerson === 'andere'
      ? setFifthQuestion(
          thirdStepTranslation?.onBehalf.black.isItReported.title
        )
      : reportingPerson === 'organization'
      ? setFifthQuestion(
          thirdStepTranslation?.organization.black.isItReported?.title
        )
      : setFifthQuestion(
          thirdStepTranslation?.normal?.black.isItReported?.title
        );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    haveYouTakenMeasures,
    typeOfRacism,
    formValues?.agreement,
    formValues?.description,
    formValues?.haveYouTakenMeasures,
    formValues?.haveYouTakenMeasuresYes,
    formValues?.haveYouTakenMeasuresYesFreeField,
    formValues?.isItAnotherFormOfDiscrimination,
    formValues?.newFormOfRacismYes,
    formValues?.newFormOfRacismYesFreeField,
    formValues?.racismManifestation,
    formValues?.racismManifestationIWasDisadvantaged,
    formValues?.racismManifestationIWasDisadvantagedFreeField,
    formValues?.otherFormOfRacism,
    formValues?.typeOfRacism,
    racismManifestation,
  ]);

  // Triggered when submitting form
  const onSubmit: SubmitHandler<ThirdFormValues> = (data) => {
    let dataWithQuestion = {
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      fourthQuestion,
      fifthQuestion,
      ...data,
    };
    setFormCookies(dataWithQuestion, THIRD_FORM_DATA);
    dispatch({ type: NEXT_STEP, payload: 'DATA 1' });
  };

  // Scroll on top

  useScrollOnTop();

  return (
    <form id="thirdForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="font-bold mb-4">Step 3/4</div>

      <div className="my-4">
        <RadioGroup
          props={register('typeOfRacism', { required: true })}
          options={thirdStepTranslation?.data?.racismType}
          title={thirdStepTranslation?.iThinkItIsAbout}
        />

        {/* Free field */}
        {typeOfRacism === 'Eine andere Art von Rassismus und zwar' && (
          <div className="ml-4">
            <InputField
              error={errors?.otherFormOfRacism ? true : false}
              name="otherFormOfRacism"
              props={register('otherFormOfRacism', {
                required: true,
                minLength: 2,
              })}
            />
          </div>
        )}
      </div>
      {/* If is either onBehalf or Andere Person */}

      {reportingPerson === 'onBehalf' || reportingPerson === 'andere' ? (
        // On Behalf Or Another person section ---------------------------------------------------------
        //----------------------------------------------------------------------------

        <>
          {/* Simple or organization */}
          {typeOfRacism && (
            <>
              <div className="my-4">
                <TextArea
                  dynamicItem={otherFormOfRacism}
                  label={
                    thirdStepTranslation?.onBehalf?.black.description.title
                  }
                  id="description"
                  placeholder={
                    thirdStepTranslation?.organization?.asian.description
                      .placeholder
                  }
                  name="description"
                  hints={thirdStepTranslation?.onBehalf}
                  props={register('description', { required: true })}
                />

                <p>
                  {errors?.description && (
                    <span className="text-sm text-red-600">
                      {thirdStepTranslation?.fieldIsRequired}
                    </span>
                  )}
                </p>
              </div>
              {
                <div className="py-4">
                  <h1 className="font-bold pb-2">
                    {typeOfRacism === 'Antiasiatischen Rassismus'
                      ? `Auf welche Art und Weise hat sich die Diskriminierung aufgrund der (zugeschriebenen) asiatischen Herkunft geäußert?`
                      : typeOfRacism === 'Anti-Schwarzen Rassismus'
                      ? 'Auf welche Art und Weise hat sich die Diskriminierung aufgrund Des Schwarz-Seins der Person gegenüber geäußert ?*'
                      : 'Auf welche Art und Weise hat sich die Diskriminierung der Person gegenüber geäußert ?*'}
                  </h1>
                  {/* Racism manifestation with sub categories */}

                  <RadioSingle
                    id="id1"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[0]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[0]
                        ?.value
                    }
                  />
                  {/* Subcategories */}
                  {racismManifestation ===
                    thirdStepTranslation?.onBehalf.black.manifestation.data[0]
                      ?.value && (
                    <div className="ml-8">
                      <RadioGroup
                        props={register('racismManifestationIWasDisadvantaged')}
                        options={
                          thirdStepTranslation?.onBehalf.black
                            .manifestationSubsection?.data
                        }
                        title=""
                      />
                    </div>
                  )}
                  <RadioSingle
                    id="id2"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[1]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[1]
                        ?.value
                    }
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[1]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id3"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[2]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.onBehalf.asian.manifestation
                            .data[2]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.onBehalf.black.manifestation
                            .data[2]?.examples
                        : thirdStepTranslation?.onBehalf.other.manifestation
                            .data[2]?.examples
                    }
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[2]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id4"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[3]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.onBehalf.asian.manifestation
                            .data[3]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.onBehalf.black.manifestation
                            .data[3]?.examples
                        : thirdStepTranslation?.onBehalf.other.manifestation
                            .data[3]?.examples
                    }
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[3]
                        ?.value
                    }
                  />

                  <RadioSingle
                    id="id5"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[4]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.onBehalf.asian.manifestation
                            .data[4]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.onBehalf.black.manifestation
                            .data[4]?.examples
                        : thirdStepTranslation?.onBehalf.other.manifestation
                            .data[4]?.examples
                    }
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[4]
                        ?.value
                    }
                  />

                  <RadioSingle
                    id="id6"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[5]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[5]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id7"
                    label={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[6]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.onBehalf.black.manifestation.data[6]
                        ?.value
                    }
                  />

                  {racismManifestation ===
                    thirdStepTranslation?.onBehalf.black.manifestation.data[6]
                      ?.value && (
                    <div className="ml-8">
                      <InputField
                        name="racismManifestationIWasDisadvantagedFreeField"
                        placeholder=""
                        props={register(
                          'racismManifestationIWasDisadvantagedFreeField',
                          {
                            required: true,
                          }
                        )}
                      />
                    </div>
                  )}
                </div>
              }
              <div className="py-4">
                <RadioGroup
                  props={register('isItAnotherFormOfDiscrimination')}
                  options={
                    thirdStepTranslation?.onBehalf?.asian
                      .otherFormOfDiscrimination.data
                  }
                  title={
                    thirdStepTranslation?.onBehalf.asian
                      .otherFormOfDiscrimination.title
                  }
                />
                {isItAnotherFormOfDiscrimination === 'Yes' ||
                  (isItAnotherFormOfDiscrimination === 'Ja' && (
                    <div className="ml-8">
                      <SelectField
                        name="newFormOfRacismYes"
                        props={register('newFormOfRacismYes')}
                        options={
                          thirdStepTranslation?.onBehalf.asian
                            .otherFormOfDiscrimination.dataYes
                        }
                        title=""
                      />

                      {newFormOfRacismYes === 'Andere Formen, und zwar:' && (
                        <div className="">
                          <InputField
                            name="newFormOfRacismYesFreeField"
                            props={register('newFormOfRacismYesFreeField', {
                              required: true,
                            })}
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <div className="my-4">
                <RadioGroup
                  props={register('haveYouTakenMeasures')}
                  options={
                    thirdStepTranslation?.onBehalf.asian.isItReported.data
                  }
                  title={
                    thirdStepTranslation?.onBehalf.asian.isItReported.title
                  }
                />

                {haveYouTakenMeasures === 'Yes' ||
                  (haveYouTakenMeasures === 'Ja' && (
                    <div className="ml-8">
                      <SelectField
                        props={register('haveYouTakenMeasuresYes')}
                        title=""
                        options={
                          thirdStepTranslation?.onBehalf?.asian?.isItReported
                            .dataYes
                        }
                        name="haveYouTakenMeasuresYes"
                      />

                      {haveYouTakenMeasuresYes === 'Anderes, und zwar:' ||
                      haveYouTakenMeasuresYes === 'Other forms, namely:' ||
                      haveYouTakenMeasuresYes ===
                        'Sie hat den Fall bei einer anderen Meldestelle gemeldet, und zwar:' ||
                      haveYouTakenMeasuresYes ===
                        'They reported the case to another reporting office, namely:' ? (
                        <div className="">
                          <InputField
                            name=""
                            placeholder="Other"
                            props={register(
                              'haveYouTakenMeasuresYesFreeField',
                              {
                                required: true,
                              }
                            )}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  ))}
              </div>

              {/* Agree before continuing */}

              <Checkbox
                id="ag"
                name="agreement"
                props={register('agreement', { required: true })}
                value=""
                label={
                  reportingPerson === 'onBehalf'
                    ? thirdStepTranslation?.agreement
                    : thirdStepTranslation?.agreementOtherPerson
                }
                variant="other"
              />
              <p>
                {errors?.agreement && (
                  <span className="text-sm text-red-600">
                    {thirdStepTranslation?.fieldIsRequired}
                  </span>
                )}
              </p>
            </>
          )}
        </>
      ) : (
        // Myself and Organization section ---------------------------------------------------------
        //----------------------------------------------------------------------------
        <>
          {/* Simple or organization */}
          {typeOfRacism && (
            <>
              <div className="my-4">
                <TextArea
                  dynamicItem={otherFormOfRacism}
                  label={
                    thirdStepTranslation?.onBehalf?.black.description.title
                  }
                  id="description"
                  placeholder={
                    thirdStepTranslation?.organization?.asian.description
                      .placeholder
                  }
                  name="description"
                  hints={
                    reportingPerson === 'myself'
                      ? thirdStepTranslation?.normal
                      : thirdStepTranslation?.organization
                  }
                  props={register('description', { required: true })}
                />
              </div>
              {reportingPerson !== 'organization' && (
                <div className="py-4">
                  <h1 className="font-bold pb-2">
                    {typeOfRacism === 'Antiasiatischen Rassismus'
                      ? `Auf welche Art und Weise hat sich die Diskriminierung aufgrund der (zugeschriebenen) asiatischen Herkunft geäußert?`
                      : typeOfRacism === 'Anti-Schwarzen Rassismus'
                      ? 'Auf welche Art und Weise hat sich die Diskriminierung aufgrund Des Schwarz-Seins der Person gegenüber geäußert ?*'
                      : 'Auf welche Art und Weise hat sich die Diskriminierung der Person gegenüber geäußert ?*'}
                  </h1>
                  {/* Racism manifestation with sub categories */}

                  <RadioSingle
                    id="id1"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[0]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[0]
                        ?.value
                    }
                  />
                  {/* Subcategories */}
                  {racismManifestation ===
                    thirdStepTranslation?.normal.black.manifestation.data[0]
                      ?.value && (
                    <div className="ml-8">
                      <RadioGroup
                        props={register(
                          'racismManifestationIWasDisadvantaged',
                          { required: true }
                        )}
                        options={
                          thirdStepTranslation?.normal.black
                            .manifestationSubsection?.data
                        }
                        title=""
                      />
                    </div>
                  )}
                  <RadioSingle
                    id="id2"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[1]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      thirdStepTranslation?.normal.black.manifestation.data[1]
                        ?.value
                    }
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[1]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id3"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[2]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.normal.asian.manifestation
                            .data[2]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.normal.black.manifestation
                            .data[2]?.examples
                        : thirdStepTranslation?.normal.other.manifestation
                            .data[2]?.examples
                    }
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[2]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id4"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[3]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.normal.asian.manifestation
                            .data[3]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.normal.black.manifestation
                            .data[3]?.examples
                        : thirdStepTranslation?.normal.other.manifestation
                            .data[3]?.examples
                    }
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[3]
                        ?.value
                    }
                  />

                  <RadioSingle
                    id="id5"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[4]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example={
                      typeOfRacism === 'Antiasiatischen Rassismus'
                        ? thirdStepTranslation?.normal.asian.manifestation
                            .data[4]?.examples
                        : typeOfRacism === 'Anti-Schwarzen Rassismus'
                        ? thirdStepTranslation?.normal.black.manifestation
                            .data[4]?.examples
                        : thirdStepTranslation?.normal.other.manifestation
                            .data[4]?.examples
                    }
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[4]
                        ?.value
                    }
                  />

                  <RadioSingle
                    id="id6"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[5]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[5]
                        ?.value
                    }
                  />
                  <RadioSingle
                    id="id7"
                    label={
                      thirdStepTranslation?.normal.black.manifestation.data[6]
                        ?.value
                    }
                    name="racismManifestation"
                    props={register('racismManifestation')}
                    example=""
                    value={
                      thirdStepTranslation?.normal.black.manifestation.data[6]
                        ?.value
                    }
                  />

                  {racismManifestation ===
                    thirdStepTranslation?.normal.black.manifestation.data[6]
                      ?.value && (
                    <div className="ml-8">
                      <InputField
                        name=""
                        placeholder=""
                        props={register(
                          'racismManifestationIWasDisadvantagedFreeField',
                          {
                            required: true,
                          }
                        )}
                      />
                    </div>
                  )}
                  <p>
                    {errors?.racismManifestationIWasDisadvantaged && (
                      <span className="text-sm text-red-600">
                        {thirdStepTranslation?.fieldIsRequired}
                      </span>
                    )}
                  </p>
                </div>
              )}
              <div className="py-4">
                <RadioGroup
                  props={register('isItAnotherFormOfDiscrimination')}
                  options={
                    thirdStepTranslation?.normal?.asian
                      .otherFormOfDiscrimination.data
                  }
                  title={
                    thirdStepTranslation?.normal.asian.otherFormOfDiscrimination
                      .title
                  }
                />
                {isItAnotherFormOfDiscrimination === 'Yes' ||
                  (isItAnotherFormOfDiscrimination === 'Ja' && (
                    <div className="ml-8">
                      <SelectField
                        name="newFormOfRacismYes"
                        props={register('newFormOfRacismYes')}
                        options={
                          thirdStepTranslation?.normal.asian
                            .otherFormOfDiscrimination.dataYes
                        }
                        title=""
                      />

                      {newFormOfRacismYes === 'Andere Formen, und zwar:' ||
                        (newFormOfRacismYes === 'Other Forms, namely:' && (
                          <div className="">
                            <InputField
                              name=""
                              placeholder=""
                              props={register('newFormOfRacismYesFreeField', {
                                required: true,
                              })}
                            />{' '}
                            <p>
                              {errors?.newFormOfRacismYesFreeField && (
                                <span className="text-sm text-red-600">
                                  {thirdStepTranslation?.fieldIsRequired}
                                </span>
                              )}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
              <div className="my-4">
                <RadioGroup
                  props={register('haveYouTakenMeasures')}
                  options={thirdStepTranslation?.normal.asian.isItReported.data}
                  title={thirdStepTranslation?.normal.asian.isItReported.title}
                />

                {haveYouTakenMeasures === 'Yes' ||
                  (haveYouTakenMeasures === 'Ja' && (
                    <div className="ml-8">
                      <SelectField
                        props={register('haveYouTakenMeasuresYes')}
                        title=""
                        options={
                          thirdStepTranslation?.normal?.asian?.isItReported
                            .dataYes
                        }
                        name="haveYouTakenMeasuresYes"
                      />

                      {haveYouTakenMeasuresYes === 'Anderes, und zwar:' ||
                      haveYouTakenMeasuresYes === 'Other, namely:' ||
                      haveYouTakenMeasuresYes ===
                        'She reported the case to another reporting office, namely:' ||
                      haveYouTakenMeasuresYes ===
                        'Sie hat den Fall bei einer anderen Meldestelle gemeldet, und zwar:' ? (
                        <div className="">
                          <InputField
                            name=""
                            placeholder="Other"
                            props={register(
                              'haveYouTakenMeasuresYesFreeField',
                              {
                                required: true,
                              }
                            )}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  ))}
              </div>
            </>
          )}
        </>
      )}

      {/* Else (Either organization or simple) */}
    </form>
  );
};

export default ThirdStep;

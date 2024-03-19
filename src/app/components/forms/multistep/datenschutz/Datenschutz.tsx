import React from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/components/button/Button';
import Link from 'next/link';
import { useFormContext } from '@/app/hooks/useFormContext';
import { NEXT_STEP, PREV_STEP } from '@/app/context/actions';
import RadioSingle from '../../radio/RadioSingle';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

type DatenschutzProps = {
  lang: string;
  datenschutzTranslation: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
    firstAgreement: Array<string>;
    secondAgreement: string;
    buttonNext: string;
    buttonPrev: string;
  };
};

type DatenschutzFormValues = {
  agreement: string;
};

const Datenschutz: React.FC<DatenschutzProps> = ({
  datenschutzTranslation,
  lang,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<DatenschutzFormValues>();

  const { dispatch } = useFormContext();

  let agreement = watch('agreement');

  useScrollOnTop();

  return (
    <div className="border md:text-left border-gray-600 rounded-md p-4 md:p-8">
      <h1 className="font-bold text-center text-xl lg:text-2xl mb-4">
        {datenschutzTranslation?.title}
      </h1>
      <p>{datenschutzTranslation?.firstParagraph}</p>
      <p className="py-2">{datenschutzTranslation?.secondParagraph}</p>
      <p>{datenschutzTranslation?.thirdParagraph}</p>
      <div className="pt-4 flex items-center ">
        <RadioSingle
          id="firstAgreement"
          name="agreement"
          props={register('agreement')}
          value={datenschutzTranslation?.firstAgreement[0]}
          label=""
        />
        <label
          htmlFor="firstAgreement"
          className="flex ml-2 text-sm items-center flex-wrap"
        >
          {datenschutzTranslation?.firstAgreement[0]}{' '}
          <Link
            className="text-primaryColor mx-2"
            href={`/${lang}/datenschutz`}
          >
            {datenschutzTranslation?.firstAgreement[1]}
          </Link>{' '}
          <h2>{datenschutzTranslation?.firstAgreement[2]}</h2>
        </label>
      </div>
      <div className="pt-2">
        <RadioSingle
          id="secondAgreement"
          name="agreement"
          props={register('agreement')}
          value={datenschutzTranslation?.secondAgreement}
          label={datenschutzTranslation?.secondAgreement}
        />
      </div>
      <div className="flex items-center space-x-4 w-full justify-between">
        <Button
          className="w-full"
          variant="other"
          onClick={() => dispatch({ type: PREV_STEP, payload: '' })}
        >
          {datenschutzTranslation?.buttonPrev}
        </Button>
        {agreement === datenschutzTranslation?.firstAgreement[0] && (
          <Button
            className="w-full"
            onClick={() => dispatch({ type: NEXT_STEP, payload: '' })}
          >
            {datenschutzTranslation?.buttonNext}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Datenschutz;

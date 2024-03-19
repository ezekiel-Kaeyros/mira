import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import SuccessIcon from '../../../../../../public/icons/successIcon.svg';
import PeopleImage from '../../../../../../public/icons/PeopleImage.svg';
import Link from 'next/link';
import { Button } from '@/app/components/button/Button';
import { useFormContext } from '@/app/hooks/useFormContext';
import { clearFormCookies, clearFormStep } from '@/cookies/cookies';
import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import { useScrollOnTop } from '@/app/hooks/useScrollOnTop';

type FifthStepProps = {
  fourthStepTranslation: any;
  fifthStepTranslation: {
    title: string;

    leftSection: {
      title: string;
      paragraph: string;
      firstLinkTitle: string;
      firstLinkDescription: string;
      secondLinkTitle: string;
      secondLinkDescription: string;
    };
    rightSection: {
      title: string;
      paragraph: string;
      button: string;
    };
    homeButton: string;
  };
  lang: string;
};

const FifthStep: React.FC<FifthStepProps> = ({
  fifthStepTranslation,
  fourthStepTranslation,
  lang,
}) => {
  const { push } = useRouter();

  const handleClickHomePage = () => {
    clearFormStep();
    clearFormCookies();
    push(`/${lang}`);
    setTimeout(() => window.location.reload(), 1500);
  };

  const refPDF = useRef<any>();

  const handleGeneratePdf = () => {
    let doc = new jsPDF({
      unit: 'pt',
      format: 'a4',
    });
    doc.html(refPDF?.current, {
      async callback(doc) {
        doc.save('report');
      },
      x: 10,
      y: 10,

      html2canvas: { scale: 0.9 },
      margin: 5,
    });

    doc.setFont('Mono', 'normal');
  };

  // Scroll on top

  useScrollOnTop();

  return (
    <div className="w-full">
      <div className="flex w-full max-w-xs mx-auto flex-col items-center space-y-4 justify-center">
        <Image src={SuccessIcon} alt="Successfull icon" />
        <h1 className="font-bold text-xl text-center ">
          {fifthStepTranslation?.title}
        </h1>
        <Image src={PeopleImage} alt="Image of people" />
      </div>
      {/* PDF to be downloaded */}
      {/* <div
        className="border w-[600px] mx-auto mt-4 p-4 border-dashed
         border-gray-100 rounded-md"
        style={{
          lineBreak: 'normal',
        }}
        ref={refPDF}
      > */}
      {/* <div>
          <div className="my-4">
            <h1 className="font-bold mb-2">
              {fourthStepTranslation?.steps.identity}
            </h1>

            <p className="flex space-x-6 items-center">
              <p>{firstStep?.age}</p>
              <p>{firstStep?.disclaimer}</p>
              <p>{firstStep?.gender}</p>
              <p>{firstStep?.identity}</p>
            </p>
          </div>
          <p className="my-4">
            <h1 className="font-bold mb-2">
              {fourthStepTranslation?.steps?.placeTime}
            </h1>
            <p className="flex space-x-6 items-center">
              <p>{secondStep?.areaLocation}</p>
              <p>{secondStep?.happenedForALongPeriod}</p>
              <p>{secondStep?.happenedOnline}</p>
              <p>{secondStep?.location}</p>
              <p>{secondStep?.otherLocation}</p>
            </p>
          </p>
          <p className="my-4">
            <h1 className="font-bold mb-2">
              {fourthStepTranslation?.steps.description}
            </h1>
            <p className="flex flex-col space-x-6 flex-wrap ">
              <p>{thirdStep?.typeOfRacism}</p>
              <p>{thirdStep?.racismManifestation}</p>
              <p>{thirdStep?.newFormOfRacismYesFreeField}</p>
              <p>{thirdStep?.racismManifestationIWasDisadvantagedFreeField}</p>
              <p>{thirdStep?.newFormOfRacismYes}</p>
              <p>{thirdStep?.newFormOfRacismYesFreeField}</p>

              <p>{thirdStep?.agreement}</p>
              <p>{thirdStep?.isItAnotherFormOfDiscrimination}</p>
              <p>{thirdStep?.otherFormOfRacism}</p>
              <p>{thirdStep?.haveYouTakenMeasuresYes}</p>
              <p className="flex flex-col">
                <p>{thirdStep?.haveYouTakenMeasuresYesFreeField}</p>
              </p>
              <p>{thirdStep?.description}</p>
            </p>
          </p>
        </div> */}
      {/* </div> */}

      {/* End PDF to be downloaded */}
      <div className="flex flex-col md:space-x-24 mt-16 justify-between md:flex-row md:justify-center">
        <div className="w-full md:max-w-md">
          <h1 className="font-bold text-2xl mb-4">
            {fifthStepTranslation?.leftSection?.title}
          </h1>
          <p>{fifthStepTranslation?.leftSection?.paragraph}</p>
          <p></p>
          <ul className="mt-4 list-disc">
            <li>
              <Link
                className="underline mr-2 font-bold text-slate-900"
                target="_blank"
                href="https://www.lks.nrw.de/index.php/beratung-qualifizierung/opferberatung"
              >
                {fifthStepTranslation?.leftSection?.firstLinkTitle}
              </Link>
              {fifthStepTranslation?.leftSection?.firstLinkDescription}
            </li>
            <li className="mt-4">
              <Link
                className="underline mr-2 font-bold text-slate-900"
                target="_blank"
                href="https://www.ada.nrw/"
              >
                {fifthStepTranslation?.leftSection?.secondLinkTitle}
              </Link>
              {fifthStepTranslation?.leftSection?.secondLinkDescription}
            </li>
          </ul>
        </div>
        {/* <div className="max-w-sm">
          <h1 className="font-bold text-2xl mb-4">Download</h1>
          <p>{fifthStepTranslation?.rightSection?.paragraph}.</p>
          <Button onClick={handleGeneratePdf}>Download</Button>
        </div> */}
      </div>

      <div className="pt-24 mx-auto max-w-sm">
        <Button onClick={() => handleClickHomePage()}>
          {fifthStepTranslation?.homeButton}
        </Button>
      </div>
    </div>
  );
};

export default FifthStep;

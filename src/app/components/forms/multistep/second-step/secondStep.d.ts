// Type of the form values
export type SecondFormValues = {
  happenedForALongPeriod: string;
  happenedOnline: string;
  areaLocation: string[];
  otherLocation: string;
};

export type SecondStepProps = {
  secondStepTranslation: {
    whenDidIncidentTakePlace: string;
    happenedOverALongPeriod: string;
    inWhichPlace: string;
    inWhichPlaceHint: string;
    itHappenedOnline: string;
    whichSocialSphere: string;
    required: string;
    freeField: string;
    data: {
      choices: Array<{
        iD: string;
        name: string;
        value: string;
        id: 1;
        label: string;
        examples: string;
      }>;
    };
  };
};

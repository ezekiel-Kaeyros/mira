export type FourthStepProps = {
  fourthStepTranslation: {
    title: string;
    link: string;
    firstParagraph: string;
    acceptance: string;
    submit: string;
    captcha: string;
    steps: {
      identity: string;
      placeTime: string;
      description: string;
      edit: string;
    };
  } | null;
};

export type FirstForm = {
  identity: string;
  gender: string;
  numberOfEmployees: string;
  organizationType: string;
  organizationTypeFreeField: string;
  age: string;
  firstQuestion: string;
  secondQuestion: string;
  genderFreeField: string;
  thirdQuestion: string;
};

export type SecondForm = {
  happenedForALongPeriod: string;
  location: string;
  happenedOnline: string;
  areaLocation: string[];
  otherLocation: string;
  firstQuestion: string;
  secondQuestion: string;
  thirdQuestion: string;
  dateState: string;
  dateRangeState: string;
};

export type ThirdForm = {
  firstQuestion: string;
  secondQuestion: string;
  thirdQuestion: string;
  fourthQuestion: string;
  fifthQuestion: string;
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
};

export type FourthFormValues = {
  captcha: string;
};

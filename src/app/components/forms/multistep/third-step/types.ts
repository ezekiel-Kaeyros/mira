type dataType = Array<{
  iD: 1;
  value: string;
  id: string;
  name: string;
  label: string;
  examples?: string;
  checked: false;
}>;

type singleTypeRacism = {
  description: {
    title: string;
    placeholder: string;
    hints: {
      title: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: string;
      item6: string;
      item7: string;
    };
  };
  manifestation: {
    titleQuestion: string;
    data: dataType;
  };
  manifestationSubsection: {
    data: dataType;
  };
  otherFormOfDiscrimination: {
    title: string;
    data: dataType;
    dataYes: string[];
  };
  isItReported: {
    title: string;
    data: dataType;
    dataYes: string[];
  };
};

type singleTypeEitherOrganizationOrOnBehalf = {
  asian: singleTypeRacism;
  black: singleTypeRacism;
  other: singleTypeRacism;
};

export type sharedType = {
  iThinkItIsAbout: string;
  fieldIsRequired: string;
  organization: singleTypeEitherOrganizationOrOnBehalf;
  normal: singleTypeEitherOrganizationOrOnBehalf;
  onBehalf: singleTypeEitherOrganizationOrOnBehalf;
  agreement: string;
  data: {
    racismType: dataType;
  };
};

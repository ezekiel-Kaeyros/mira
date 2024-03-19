export type FirstFormValues = {
  identity: string;
  gender: string;
  age: string;
  disclaimer: string;
  genderFreeField: string;
  organizationTypeFreeField: string;
  organizationType: string;
  numberOfEmployees: string;
};

type dataType = Array<{
  iD: number;
  value: string;
  id: string;
  name: string;
  label: string;
  examples: string;
  checked: boolean;
}>;

type FirstStepProps = {
  firstStepTranslation: {
    disclaimer: string;
    disclaimerAgreement: string;
    whoIsAffected: {
      title: string;
      firstOption: string;
      secondOption: string;
      thirdOption: string;
      fourthOption: string;
      fieldIsRequired: string;
    };
    organizationTypeQuestion: string;
    numberOfEmployeesQuestion: string;
    whoIsAffectedOnBehalfQuestion: {
      firstOption: string;
      secondQuestion: string;
    };
    howOldAreYouQuestion: {
      firstQuestion: string;
      secondQuestion: string;
    };
    freeField: string;
    data: {
      genders: dataType;
      age: dataType;
      organizationTypeData: dataType;
      numberOfEmployees: dataType;
    };
  };
};

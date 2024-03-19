import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export const useFormContext = () => {
  const { state, dispatch } = useContext(FormContext);
  let step = state.step;
  let formData = state.formData;
  let racismType: 'black' | 'asian' | 'other' | 'notSure' = state.racismType;
  let reportingPerson: 'myself' | 'onBehalf' | 'organization' | 'andere' =
    state?.reportingPerson;
  let formErrors: boolean = state.formErrors;
  let isEditing: boolean = state?.isEditing;
  return {
    step,
    formData,
    racismType,
    reportingPerson,
    formErrors,
    isEditing,
    dispatch,
  };
};

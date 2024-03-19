'use client';

import React, { Dispatch, createContext, useEffect, useReducer } from 'react';
import {
  EDIT_STEP,
  FORM_ERRORS,
  IS_EDITING,
  LAST_STEP,
  NEXT_STEP,
  PREV_STEP,
  RACISM_TYPE,
  REPORTER,
  SUBMIT_FORM,
} from './actions';
import { getFormStep, setFormStep } from '@/cookies/cookies';

type FormType = {
  step: number;
  racismType: 'black' | 'asian' | 'other' | 'notSure';
  formData: Array<any>;
  isEditing: boolean;
  reportingPerson: 'myself' | 'onBehalf' | 'organization' | 'andere';
  formErrors: boolean;
};

type ActionType = {
  payload?: any;
  type: string;
};

const initialState: FormType = {
  step: getFormStep(),
  racismType: 'black',
  formErrors: true,
  reportingPerson: 'myself',
  isEditing: false,
  formData: [],
};

const reducer = (initialState: FormType, action: ActionType) => {
  switch (action.type) {
    case RACISM_TYPE:
      return {
        ...initialState,
        racismType: action?.payload,
      };
    case NEXT_STEP:
      setFormStep(initialState?.step + 1);
      return {
        ...initialState,
        step: getFormStep(),
        formData: [initialState.formData, ...action.payload],
      };

    case PREV_STEP:
      setFormStep(initialState?.step - 1);
      return {
        ...initialState,
        step: getFormStep(),
      };

    case IS_EDITING:
      return {
        ...initialState,
        isEditing: true,
      };

    case EDIT_STEP:
      setFormStep(action?.payload);
      return {
        ...initialState,
        isEditing: true,
        step: getFormStep(),
      };

    case LAST_STEP:
      setFormStep(action?.payload);
      return {
        ...initialState,
        isEditing: true,
        step: getFormStep(),
      };
    case REPORTER:
      return {
        ...initialState,
        reportingPerson: action?.payload,
      };

    case SUBMIT_FORM:
      console.log(action.payload);
      return {
        ...initialState,
      };

    case FORM_ERRORS:
      return {
        ...initialState,
        formErrors: action.payload,
      };

    default:
      return initialState;
  }
};

export const FormContext = createContext<{
  state: FormType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

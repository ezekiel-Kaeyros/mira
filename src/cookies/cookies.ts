import cookies from 'js-cookie';
import {
  FIRST_FORM_DATA,
  FORM_STEP,
  SECOND_FORM_DATA,
  THIRD_FORM_DATA,
  USER_DATA,
} from './cookies.d';

export const setUserCookies = (data: any) => {
  cookies.set(USER_DATA, JSON.stringify(data));
};

export const getUserCookies = () => {
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};

// Form cookies

export const setFormCookies = (data: any, formData: string) => {
  cookies.set(formData, JSON.stringify(data), { expires: 7 });
};

export const getFormCookies = (formData: string) => {
  const data = cookies.get(formData);
  return data ? JSON.parse(data) : undefined;
};

export const clearFormCookies = () => {
  cookies.remove(FORM_STEP);
  cookies.remove(FIRST_FORM_DATA);
  cookies.remove(SECOND_FORM_DATA);
  cookies.remove(THIRD_FORM_DATA);
};

// Setting FORM steps

export const getFormStep = (): number => {
  const step = cookies?.get(FORM_STEP);
  return step ? JSON.parse(step) : 1;
};

export const setFormStep = (step: number): void => {
  cookies.set(FORM_STEP, JSON.stringify(step), { expires: 1 });
};

export const clearFormStep = (): void => {
  cookies.remove(FORM_STEP);
  cookies.remove(FIRST_FORM_DATA);
};

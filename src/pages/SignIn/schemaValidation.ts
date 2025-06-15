import * as Yup from 'yup';

const emailValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .matches(/^\S*$/, 'E-mail не должен содержать пробелов')
  .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, 'Неверный адрес электронной почты')
  .matches(/^(?!\.)(?!.*\.\.)/, 'Неверный адрес электронной почты');

const passwordValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .min(8, 'Пароль должен содержать минимум 8 символов')
  .matches(/^\S*$/, 'Пароль не должен содержать пробелов')
  .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
  .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
  .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
  .matches(/[@$!%*?&]/, 'Пароль должен содержать хотя бы один специальный символ (@$!%*?&)');

export const schema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

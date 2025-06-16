import * as Yup from 'yup';

const nameValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .matches(/^(?:[^ ]|$)/, 'Первым символом не может быть пробел')
  .matches(/^(?:\s*[a-zа-яё]+(?:-[a-zа-яё]+)?(?:\s+[a-zа-яё]+(?:-[a-zа-яё]+)?)?)?$/iu, 'Некорректная запись')
  .max(30, 'Число символов должно быть не более 30');

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
  name: nameValidation,
  repeatPassword: Yup.string()
    .required('Обязательное для заполнения поле')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
});

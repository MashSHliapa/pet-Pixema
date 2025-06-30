import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../SignIn/schemaValidation';
import { ThemeContext } from '../../components/Context/ThemeContext';
import type { FormDataType } from '../../types/interfaces';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowRepeatPassword = () => setShowRepeatPassword((prev) => !prev);

  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema) as Resolver<FormDataType>,
  });

  const onSubmit = async (data: FormDataType) => {
    try {
      const response = await fetch('http://localhost:3009/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          repeatPassword: data.repeatPassword,
        }),
      });
      if (response.ok) {
        navigate('/auth/sign-in');
        alert('Регистрация прошла успешно! Теперь войдите в аккаунт.');
        reset();
      } else {
        const result = await response.json();
        alert(result.message || 'Ошибка при регистрации');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className={theme ? 'auth-form__body dark-theme' : 'auth-form__body light-theme'}>
          <h3 className="auth-form__title title title-margin">Sign Up</h3>
          <form
            action="#"
            method="POST"
            className="auth-form__form form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="auth-form__item">
              <label htmlFor="name-signUp" className="auth-form__label label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                autoComplete="name-signUp"
                placeholder="Your name"
                {...register('name')}
                required
              />
              {errors.name && <span className="auth-form__error">{errors.name.message}</span>}
            </div>
            <div className="auth-form__item">
              <label htmlFor="email-signUp" className="auth-form__label label">
                Email
              </label>
              <input
                type="email"
                id="email-signUp"
                className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                autoComplete="email"
                placeholder="Your email"
                {...register('email')}
                required
              />
              {errors.email && <span className="auth-form__error">{errors.email.message}</span>}
            </div>
            <div className="auth-form__item auth-form__item_password-input-wrapper">
              <label htmlFor="password-signUp" className="auth-form__label label">
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-signUp"
                  className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                  placeholder="Your password"
                  {...register('password')}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="auth-form__button-show-password"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <span className="auth-form__error">{errors.password.message}</span>}
            </div>
            <div className="auth-form__item auth-form__item_password-input-wrapper">
              <label htmlFor="confirmPassword-signUp" className="auth-form__label label">
                Confirm password
              </label>
              <div className="password-input-container">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  id="confirmPassword-signUp"
                  className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                  placeholder="Confirm password"
                  {...register('repeatPassword', {
                    required: 'Повторите пароль',
                    validate: (value) => value === watch('password') || 'Пароли не совпадают',
                  })}
                />
                <button
                  type="button"
                  onClick={toggleShowRepeatPassword}
                  className="auth-form__button-show-password"
                  aria-label={showRepeatPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showRepeatPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.repeatPassword && <span className="auth-form__error">{errors.repeatPassword.message}</span>}
            </div>
            <button
              type="submit"
              className={
                isValid && isDirty
                  ? 'auth-form__button button button-submit'
                  : 'auth-form__button button button-disabled'
              }
            >
              Sign up
            </button>
          </form>
          <p className="auth-form__text">
            Already have an account?{' '}
            <span>
              <a href="#">Sign in</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

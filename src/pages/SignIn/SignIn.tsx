import { useContext, useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from './schemaValidation';
import { ThemeContext } from '../../components/Context/ThemeContext';
import type { FormDataType } from '../../types/interfaces';
import './SignIn.scss';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema) as Resolver<FormDataType>,
  });

  function onSubmit() {
    reset();
  }

  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className={theme ? 'auth-form__body dark-theme' : 'auth-form__body light-theme'}>
          <h3 className="auth-form__title title title-margin">Sign In</h3>
          <form
            action="#"
            method="POST"
            className="auth-form__form form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="auth-form__item">
              <label htmlFor="email-signIn" className="auth-form__label label">
                Email
              </label>
              <input
                type="email"
                id="email-signIn"
                className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                autoComplete="email"
                placeholder="Your email"
                {...register('email')}
                required
              />
              {errors.email && <span className="auth-form__error">{errors.email.message}</span>}
            </div>
            <div className="auth-form__item auth-form__item_password-input-wrapper">
              <label htmlFor="password-signIn" className="auth-form__label label">
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-signIn"
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
              <div className="auth-form__hint">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              className={
                isValid && isDirty
                  ? 'auth-form__button button button-submit'
                  : 'auth-form__button button button-disabled'
              }
            >
              Sign in
            </button>
          </form>
          <p className="auth-form__text">
            Don’t have an account?{' '}
            <span>
              <a href="#">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

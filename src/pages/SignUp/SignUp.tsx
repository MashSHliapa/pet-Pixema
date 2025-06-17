import { useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../SignIn/schemaValidation';
import type { FormDataType } from '../../types/interfaces';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowRepeatPassword = () => setShowRepeatPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema) as Resolver<FormDataType>,
  });

  function onSubmit() {
    reset();
  }
  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className="auth-form__body">
          <h3 className="auth-form__title title">Sign Up</h3>
          <form
            action="#"
            method="POST"
            className="auth-form__form form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="auth-form__item">
              <label className="auth-form__label label">Name</label>
              <input
                type="text"
                id="text"
                className="auth-form__input"
                placeholder="Your name"
                {...register('name')}
                required
              />
              {errors.name && <span className="auth-form__error">{errors.name.message}</span>}
            </div>
            <div className="auth-form__item">
              <label className="auth-form__label label">Email</label>
              <input
                type="email"
                id="email"
                className="auth-form__input"
                placeholder="Your email"
                {...register('email')}
                required
              />
              {errors.email && <span className="auth-form__error">{errors.email.message}</span>}
            </div>
            <div className="auth-form__item auth-form__item_password-input-wrapper">
              <label className="auth-form__label label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="auth-form__input"
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
              <label className="auth-form__label label">Confirm password</label>
              <div className="password-input-container">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  id="repeatPassword"
                  className="auth-form__input"
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

            <button type="submit" className="auth-form__button button button-submit">
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
        <p className="auth-form__copyright">© All Rights Reserved</p>
      </div>
    </div>
  );
}

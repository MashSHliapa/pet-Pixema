import { useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schemaValidation';
import type { FormDataType } from '../../types/interfaces';
import './SignIn.scss';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(schema) as Resolver<FormDataType>,
  });

  function onSubmit() {
    reset();
  }

  return (
    <div className="sign-in">
      <div className="sign-in__container _container">
        <div className="sign-in__body">
          <h3 className="sign-in__title title">Sign In</h3>
          <form
            action="#"
            method="POST"
            className="sign-in__form form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="sign-in__item">
              <label className="sign-in__label label">Email</label>
              <input
                type="email"
                id="email"
                className="sign-in__input"
                placeholder="Your email"
                {...register('email')}
                required
              />
              {errors.email && <span className="sign-in__error">{errors.email.message}</span>}
            </div>
            <div className="sign-in__item sign-in__item_password-input-wrapper">
              <label className="sign-in__label label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="sign-in__input"
                  placeholder="Your password"
                  {...register('password')}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="sign-in__button-show-password"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <span className="sign-in__error">{errors.password.message}</span>}
              <div className="sign-in__hint">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="sign-in__button button button-submit">
              Sign in
            </button>
          </form>
          <p className="sign-in__text">
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

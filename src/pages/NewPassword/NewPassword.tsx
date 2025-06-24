import { useContext, useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newPasswordSchema } from '../SignIn/schemaValidation';
import { ThemeContext } from '../../components/Context/ThemeContext';
import type { FormDataType } from '../../types/interfaces';

export function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowRepeatPassword = () => setShowRepeatPassword((prev) => !prev);

  const {
    register,
    watch,
    // reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(newPasswordSchema) as Resolver<FormDataType>,
  });

  const { theme } = useContext(ThemeContext);

  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className={theme ? 'auth-form__body dark-theme' : 'auth-form__body light-theme'}>
          <h3 className="auth-form__title title">New password</h3>
          <form action="#" method="POST" className="auth-form__form form">
            <div className="auth-form__item">
              <label htmlFor="password-newPassword" className="auth-form__label label">
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-newPassword"
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
              <label htmlFor="repeatPassword-newPassword" className="auth-form__label label">
                Confirm password
              </label>
              <div className="password-input-container">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  id="repeatPassword-newPassword"
                  className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                  placeholder="Confirm your password"
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
              Set password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useForm, type Resolver } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '../SignIn/schemaValidation';
import { ThemeContext } from '../../components/Context/ThemeContext';
import type { FormDataType } from '../../types/interfaces';

export function ResetPassword() {
  const { theme } = useContext(ThemeContext);

  const {
    // reset,
    // handleSubmit,
    watch,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(emailSchema) as Resolver<FormDataType>,
  });

  const email = isValid && isDirty && watch('email', '');

  return (
    <div className="auth-form">
      <div className="auth-form__container _container">
        <div className={theme ? 'auth-form__body dark-theme' : 'auth-form__body light-theme'}>
          <h3 className="auth-form__title title">Reset password</h3>
          <form action="#" className="auth-form__form form">
            {email && (
              <div className="auth-form__item">
                You will receive an email {email} with a link to reset your password!
              </div>
            )}
            <div className="auth-form__item">
              <label htmlFor="email-reset" className="auth-form__label label">
                Email
              </label>
              <input
                type="email"
                id="email-reset"
                className={theme ? 'auth-form__input input-dark-theme' : 'auth-form__input input-light-theme'}
                placeholder="Your email"
                {...register('email')}
                required
              />
              {errors.email && <span className="auth-form__error">{errors.email.message}</span>}
            </div>
            <button
              type="submit"
              className={
                isValid && isDirty
                  ? 'auth-form__button button button-submit'
                  : 'auth-form__button button button-disabled'
              }
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

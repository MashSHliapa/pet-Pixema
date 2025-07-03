import { useContext } from 'react';
import { Switch } from '../../components/Switch/Switch';
import { ThemeContext } from '../../components/Context/ThemeContext';
import './Settings.scss';

export function Settings() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="settings">
      <div className="settings__container _container">
        <div className="settings__body">
          <form className="settings__form form">
            <div className="form__title title">Profile</div>
            <div className={theme ? 'form__wrapper fields-wrapper dark-theme-forms' : 'form__wrapper fields-wrapper'}>
              <div className="form__column">
                <label htmlFor="name-settings" className="form__label label">
                  Name
                </label>
                <input
                  type="text"
                  id="name-settings"
                  className={
                    theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
                  }
                />
              </div>
              <div className="form__column">
                <label htmlFor="email-settings" className="form__label label">
                  Email
                </label>
                <input
                  type="text"
                  id="email-settings"
                  className={
                    theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
                  }
                />
              </div>
            </div>

            <div className="form__title title">Password</div>
            <div className={theme ? 'form__wrapper fields-wrapper dark-theme-forms' : 'form__wrapper fields-wrapper'}>
              <div className="form__column">
                <label htmlFor="password-settings" className="form__label label">
                  Password
                </label>
                <input
                  type="text"
                  id="password-settings"
                  className={
                    theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
                  }
                  placeholder="Your password"
                />
              </div>
              <div className="form__column">
                <div className="form__item">
                  <label htmlFor="newPassword-settings" className="form__label label">
                    New password
                  </label>
                  <input
                    type="text"
                    id="newPassword-settings"
                    className={
                      theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
                    }
                    placeholder="New password"
                  />
                </div>
                <div className="form__item">
                  <label htmlFor="confirmPassword-settings" className="form__label label">
                    Confirm password
                  </label>
                  <input
                    type="text"
                    id="confirmPassword-settings"
                    className={
                      theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
                    }
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>
            <div className="form__title title">Color mode</div>
            <div
              className={
                theme ? 'form__theme-wrapper fields-wrapper dark-theme-forms' : 'form__theme-wrapper fields-wrapper'
              }
            >
              <div className="form__switch-text">
                Dark <span>Use dark thema</span>
              </div>
              <Switch />
            </div>
            <div className="form__buttons-group-settings">
              <div className={theme ? 'form__button-settings button' : 'form__button-settings button light-field'}>
                Cancel
              </div>
              <button
                type="submit"
                className={
                  theme
                    ? 'form__button-settings button button-submit'
                    : 'form__button-settings button button-submit light-field'
                }
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

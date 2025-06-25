import { Switch } from '../../components/Switch/Switch';
import './Settings.scss';

export function Settings() {
  return (
    <div className="settings">
      <div className="settings__container _container">
        <div className="settings__body">
          <form className="settings__form form">
            <div className="form__title title">Profile</div>
            <div className="form__wrapper fields-wrapper">
              <div className="form__column">
                <label htmlFor="name-settings" className="form__label label">
                  Name
                </label>
                <input type="text" id="name-settings" className="form__input input-field" />
              </div>
              <div className="form__column">
                <label htmlFor="email-settings" className="form__label label">
                  Email
                </label>
                <input type="text" id="email-settings" className="form__input input-field" />
              </div>
            </div>

            <div className="form__title title">Password</div>
            <div className="form__wrapper fields-wrapper">
              <div className="form__column">
                <label htmlFor="password-settings" className="form__label label">
                  Password
                </label>
                <input
                  type="text"
                  id="password-settings"
                  className="form__input input-field"
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
                    className="form__input input-field"
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
                    className="form__input input-field"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>
            <div className="form__title title">Color mode</div>
            <div className="form__theme-wrapper fields-wrapper">
              <div className="form__switch-text">
                Dark <span>Use dark thema</span>
              </div>
              <Switch />
            </div>
            <div className="form__buttons-group-settings">
              <div className="form__button-settings button">Cancel</div>
              <button type="submit" className="form__button-settings button button-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

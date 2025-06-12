import './SignIn.scss';

export function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__container _container">
        <div className="sign-in__body">
          <h3 className="sign-in__title title">Sign In</h3>
          <form action="#" className="sign-in__form form">
            <div className="sign-in__item">
              <label className="sign-in__label label">Email</label>
              <input type="text" className="sign-in__input" placeholder="Your email" />
            </div>
            <div className="sign-in__item">
              <label className="sign-in__label label">Password</label>
              <input type="text" className="sign-in__input" placeholder="Your password" />
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

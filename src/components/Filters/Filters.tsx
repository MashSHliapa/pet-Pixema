import close from '../../assets/icons/filter_close.svg';
import './Filters.scss';
export function Filters() {
  return (
    <div className="filters">
      <div className="filters__body">
        <div className="filters__header">
          <h3 className="filters__name">Filters</h3>
          <div className="filters__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <form action="#" className="filters__form form">
          <div className="form__option option">
            <label htmlFor="" className="option__label">
              Sort by
            </label>
            <div className="option__items-wrapper">
              <div className="option__choise">
                <input type="radio" name="rating" className="option__default-button" />
                <span className="option__new-button">Rating</span>
              </div>
              <div className="option__choise">
                <input type="radio" name="year" className="option__default-button" />
                <span className="option__new-button">Year</span>
              </div>
            </div>
          </div>
          <div className="form__separator"></div>

          <div className="form__item">
            <label htmlFor="" className="form__label">
              Full or short movie name
            </label>
            <input type="text" className="form__input" placeholder="Your text" />
          </div>

          <div className="form__genre genre">
            <div className="genre__tag">
              <p className="genre__text">Adventure</p>
              <div className="genre__btn">
                <img src={close} alt="close" />
              </div>
            </div>
            <div className="genre__tag">
              <p className="genre__text">Drama</p>
              <div className="genre__btn">
                <img src={close} alt="close" />
              </div>
            </div>
            <div className="genre__tag">
              <p className="genre__text">Documental</p>
              <div className="genre__btn">
                <img src={close} alt="close" />
              </div>
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="" className="form__label">
              Years
            </label>
            <div className="form__input_wrapper">
              <input type="text" className="form__input form__input_small" placeholder="From" />
              <input type="text" className="form__input form__input_small" placeholder="To" />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="" className="form__label">
              Rating
            </label>
            <div className="form__input_wrapper">
              <input type="text" className="form__input form__input_small" placeholder="From" />
              <input type="text" className="form__input form__input_small" placeholder="To" />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="" className="form__label">
              Country
            </label>
            <select className="form__input form__input_select">
              <option hidden>Select country</option>
              <option value="1">United States</option>
              <option value="2">United Kingdom</option>
            </select>
          </div>
          <div className="form__buttons-group">
            <div className="form__button">Clear filter</div>
            <div className="form__button form__button_active">Show results</div>
          </div>
        </form>
      </div>
    </div>
  );
}

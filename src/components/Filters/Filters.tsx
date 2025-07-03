import { useContext, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import close from '../../assets/icons/filter_close.svg';
import './Filters.scss';

export function Filters({ setIsOpenFilters }: { setIsOpenFilters: (value: boolean) => void }) {
  const [request, setRequest] = useState('');
  const [isBtnSort, setIsBtnSort] = useState(false);
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  function handleClickCloseFilters() {
    setIsOpenFilters(false);
  }

  function handleClickEnterRequest(event: ChangeEvent<HTMLInputElement>) {
    setRequest(event.target.value);
  }

  function handleToggleSortByYear() {
    setIsBtnSort(!isBtnSort);
  }

  function handleSubmitForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.trim()) {
      navigate(`/filter/${encodeURIComponent(request.trim())}`, {
        state: {
          isBtnSort,
          yearFrom: yearFrom.trim() ? Number(yearFrom) : null,
          yearTo: yearTo.trim() ? Number(yearTo) : null,
        },
      });
      setIsOpenFilters(false);
    }
  }

  function handleCrearFilter() {
    setRequest('');
    setIsBtnSort(false);
    setYearFrom('');
    setYearTo('');
  }

  return (
    <div className={theme ? 'filters dark-theme-forms' : 'filters light-theme light-field-form'}>
      <div className="filters__body">
        <div className="filters__header title-margin">
          <h3 className="filters__title title">Filters</h3>
          <div className="filters__close" onClick={handleClickCloseFilters}>
            <img src={close} alt="close" />
          </div>
        </div>
        <form action="#" className="filters__form form" onSubmit={handleSubmitForm}>
          <div className="form__item">
            <label htmlFor="" className="form__label label">
              Sort by
            </label>
            <div
              className={`form__button button
                        ${isBtnSort ? '' : 'form__button_disable'}
                        ${theme ? '' : 'light-field'}`}
              onClick={handleToggleSortByYear}
            >
              Year
            </div>
          </div>
          {/* <div className="form__option option">
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
          </div> */}
          <div className="form__separator"></div>

          <div className="form__item">
            <label htmlFor="" className="form__label label">
              Full or short movie name
            </label>
            <input
              type="text"
              className={
                theme ? 'form__input input-field input-dark-theme' : 'form__input input-field input-light-theme'
              }
              placeholder="Your text"
              value={request}
              onChange={handleClickEnterRequest}
            />
          </div>

          {/* <div className="form__genre genre">
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
          </div> */}

          <div className="form__item">
            <label htmlFor="" className="form__label label">
              Years
            </label>
            <div className="form__input_wrapper">
              <input
                type="text"
                className={
                  theme
                    ? 'form__input form__input_small input-field input-dark-theme'
                    : 'form__input form__input_small input-field input-light-theme'
                }
                placeholder="From"
                value={yearFrom}
                onChange={(e) => setYearFrom(e.target.value)}
              />
              <input
                type="text"
                className={
                  theme
                    ? 'form__input form__input_small input-field input-dark-theme'
                    : 'form__input form__input_small input-field input-light-theme'
                }
                placeholder="To"
                value={yearTo}
                onChange={(e) => setYearTo(e.target.value)}
              />
            </div>
          </div>

          {/* <div className="form__item">
            <label htmlFor="" className="form__label">
              Rating
            </label>
            <div className="form__input_wrapper">
              <input type="text" className="form__input form__input_small" placeholder="From" />
              <input type="text" className="form__input form__input_small" placeholder="To" />
            </div>
          </div> */}

          {/* <div className="form__item">
            <label htmlFor="" className="form__label">
              Country
            </label>
            <select className="form__input form__input_select">
              <option hidden>Select country</option>
              <option value="1">United States</option>
              <option value="2">United Kingdom</option>
            </select>
          </div> */}
          <div className="form__buttons-group">
            <div
              className={theme ? 'form__button button' : 'form__button button light-field'}
              onClick={handleCrearFilter}
            >
              Clear filter
            </div>
            <button
              type="submit"
              className={theme ? 'form__button button button-submit' : 'form__button button button-submit light-field'}
            >
              Show results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

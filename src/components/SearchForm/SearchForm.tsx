import { useContext, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { Filters } from '../Filters/Filters';
import filter from '../../assets/icons/filter_icon.svg';
import './SearchForm.scss';

export function SearchForm() {
  const [request, setRequest] = useState('');
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  function handleInputRequest(event: ChangeEvent<HTMLInputElement>) {
    setRequest(event.target.value);
  }

  function handleSubmitForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.trim()) {
      navigate(`/search/${encodeURIComponent(request.trim())}`);
      setRequest('');
    }
  }

  function handleClickOpenFilters() {
    setIsOpenFilters(true);
  }

  return (
    <div className="search">
      <form
        action="#"
        className={theme ? 'search__form dark-field dark-field-border' : 'search__form light-field-form'}
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          className={theme ? 'search__input dark-field' : 'search__input light-field-input'}
          placeholder="Search"
          value={request}
          onChange={handleInputRequest}
        />
        <div className="search__filter" onClick={handleClickOpenFilters}>
          <img src={filter} alt="filter" />
        </div>
      </form>
      {isOpenFilters && <Filters setIsOpenFilters={setIsOpenFilters} />}
    </div>
  );
}

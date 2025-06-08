import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import filter from '../../assets/icons/filter_icon.svg';
import './SearchForm.scss';

export function SearchForm() {
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

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

  return (
    <div className="search">
      <form action="#" className="search__form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="search__input"
          placeholder="Search"
          value={request}
          onChange={handleInputRequest}
        />
        <div className="search__filter">
          <img src={filter} alt="filter" />
        </div>
      </form>
    </div>
  );
}

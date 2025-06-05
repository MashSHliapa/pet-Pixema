import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { fetchItemCard } from '../../redux/itemCardSlice';
import { Loading } from '../../components/Loading/Loading';
import type { RootState } from '../../redux/store';
import type { DataItemCardResponse, ICardItem } from '../../types/interfaces';
import imdb from '../../assets/icons/imdb.svg';
import send from '../../assets/icons/send.svg';
import './ItemCard.scss';
import { addConditionerToFavorites, removeConditionerFromFavorite } from '../../redux/favoritesSlice';

export function ItemCard() {
  const { imdbID } = useParams<string>();
  const dispatch = useDispatch<ThunkDispatch<DataItemCardResponse, null, Action>>();
  const { data: post, loading, error } = useSelector((state: RootState) => state.itemCard);

  const favorites = useSelector((state: RootState) => state.favorites.data);

  const isChecked = post ? favorites.some((item: ICardItem) => item.imdbID === post.imdbID) : false;

  function handleToggleFavoriteCard() {
    if (isChecked) {
      dispatch(removeConditionerFromFavorite(post));
    } else {
      dispatch(addConditionerToFavorites(post));
    }
  }

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchItemCard({ imdbID }));
    }
  }, [dispatch, imdbID]);

  if (loading) {
    return (
      <div className="catalog__loading">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const genresArr = post.Genre?.split(',');
  const raiting = post.Ratings;

  return (
    <div className="item-card">
      <div className="item-card__container _container">
        <div className="item-card__body">
          <div className="item-card__info-mobile">
            <ul className="item-card__genre-wrapper">
              <li className="item-card__genre genre-style">{genresArr ? genresArr[0] : null}</li>
              <li className="item-card__genre genre-style">{genresArr ? genresArr[1] : null}</li>
              <li className="item-card__genre genre-style">{genresArr ? genresArr[2] : null}</li>
            </ul>
            <h2 className="item-card__title">{post.Title}</h2>
            <div className="item-card__ratings-runtime ratings-runtime">
              <div className="ratings-runtime__icon ratings-runtime__icon_green">
                {' '}
                {raiting ? raiting[2].Value : null}
              </div>
              <div className="ratings-runtime__icon">
                <div className="ratings-runtime__image">
                  <img src={imdb} alt="imdb" />
                </div>
                <div className="ratings-runtime__number">{post.imdbRating}</div>
              </div>
              <div className="ratings-runtime__icon">{post.Runtime}</div>
            </div>
          </div>
          <div className="item-card__data-wrapper">
            <div className="item-card__poster poster">
              <img src={post.Poster} alt="image" />
            </div>
            <div className="item-card__actions actions">
              <div className="actions__item" onClick={handleToggleFavoriteCard}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z"
                    fill={isChecked ? '#7B61FF' : '#AFB2B6'}
                  />
                </svg>
              </div>
              <div className="actions__item">
                <img src={send} alt="image" />
              </div>
            </div>
          </div>
          <div className="item-card__contant-box">
            <div className="item-card__info">
              <ul className="item-card__genre-wrapper">
                <li className="item-card__genre genre-style">{genresArr ? genresArr[0] : null}</li>
                <li className="item-card__genre genre-style">{genresArr ? genresArr[1] : null}</li>
                <li className="item-card__genre genre-style">{genresArr ? genresArr[2] : null}</li>
              </ul>
              <h2 className="item-card__title">{post.Title}</h2>
              <div className="item-card__ratings-runtime ratings-runtime">
                <div className="ratings-runtime__icon ratings-runtime__icon_green">
                  {raiting ? raiting[2].Value : null}
                </div>
                <div className="ratings-runtime__icon">
                  <div className="ratings-runtime__image">
                    <img src={imdb} alt="imdb" />
                  </div>
                  <div className="ratings-runtime__number">{post.imdbRating}</div>
                </div>
                <div className="ratings-runtime__icon">{post.Runtime}</div>
              </div>
            </div>
            <h3 className="item-card__plot">{post.Plot}</h3>
            <ul className="item-card__characteristics">
              <li className="item-card__items">
                <p className="item-card__label">Year</p>
                <h3 className="item-card__meanning">{post.Year}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Released</p>
                <h3 className="item-card__meanning">{post.Released}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">BoxOffice</p>
                <h3 className="item-card__meanning">{post.BoxOffice}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Country</p>
                <h3 className="item-card__meanning">{post.Country}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Production</p>
                <h3 className="item-card__meanning">{post.Production}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Actors</p>
                <h3 className="item-card__meanning">{post.Actors}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Director</p>
                <h3 className="item-card__meanning">{post.Director}</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Writer</p>
                <h3 className="item-card__meanning">{post.Writer}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

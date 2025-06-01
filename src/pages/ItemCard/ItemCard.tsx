import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { fetchItemCard } from '../../redux/itemCardSlice';
import { Loading } from '../../components/Loading/Loading';
import type { RootState } from '../../redux/store';
import type { DataItemCardResponse } from '../../types/interfaces';
import imdb from '../../assets/icons/imdb.svg';
import favorite from '../../assets/icons/favorite.svg';
import send from '../../assets/icons/send.svg';
import './ItemCard.scss';

export function ItemCard() {
  const { imdbID } = useParams<string>();
  const dispatch = useDispatch<ThunkDispatch<DataItemCardResponse, null, Action>>();
  const { data: post, loading, error } = useSelector((state: RootState) => state.itemCard);

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
              <div className="actions__item">
                <img src={favorite} alt="image" />
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

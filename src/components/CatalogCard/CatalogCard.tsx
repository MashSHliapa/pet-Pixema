import { Link } from 'react-router-dom';
import type { ICatalogCard } from '../../types/interfaces';
import './CatalogCard.scss';

export function CatalogCard(props: { post: ICatalogCard }) {
  return (
    <div className="catalog-card">
      <div className="catalog-card__body">
        <Link to={`/selected/${props.post.imdbID}`} className="catalog-card__poster-wrapper">
          <div className="catalog-card__poster poster">
            <img src={props.post.Poster} alt="image" />
          </div>
          <div className="catalog-card__year">{props.post.Year}</div>
        </Link>
        <h3 className="catalog-card__title">{props.post.Title}</h3>
        <ul className="catalog-card__genres">
          <li className="catalog-card__genre genre-style">{props.post.Type}</li>
          <li className="catalog-card__genre genre-style">{props.post.Type}</li>
        </ul>
      </div>
    </div>
  );
}

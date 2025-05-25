import type { PostData } from '../../types/interfaces';
import './CatalogCard.scss';

export function CatalogCard(props: { post: PostData }) {
  return (
    <div className="catalog-card">
      <div className="catalog-card__body">
        <div className="catalog-card__image-wrapper">
          <div className="catalog-card__image">
            <img src={props.post.Poster} alt="image" />
          </div>
          <div className="catalog-card__year">{props.post.Year}</div>
        </div>
        <h3 className="catalog-card__title">{props.post.Title}</h3>
        <div className="catalog-card__types">
          <h3 className="catalog-card__type">{props.post.Type}</h3>
          <h3 className="catalog-card__type">{props.post.Type}</h3>
        </div>
      </div>
    </div>
  );
}

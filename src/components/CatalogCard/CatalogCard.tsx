import image from '../../assets/image/image.jpg';
import './CatalogCard.scss';

export function CatalogCard() {
  return (
    <div className="catalog-card">
      <div className="catalog-card__body">
        <div className="catalog-card__image-wrapper">
          <div className="catalog-card__image">
            <img src={image} alt="image" />
          </div>
          <div className="catalog-card__year">2018</div>
        </div>
        <h3 className="catalog-card__title">Star Wars: The Rise of Skywalker Star Wars: The Rise of </h3>
        <div className="catalog-card__types">
          <h3 className="catalog-card__type">Action</h3>
          <h3 className="catalog-card__type">Action</h3>
        </div>
      </div>
    </div>
  );
}

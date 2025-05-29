import imdb from '../../assets/icons/imdb.svg';
import favorite from '../../assets/icons/favorite.svg';
import send from '../../assets/icons/send.svg';
import './ItemCard.scss';

export function ItemCard() {
  return (
    <div className="item-card">
      <div className="item-card__container _container">
        <div className="item-card__body">
          <div className="item-card__info-mobile">
            <ul className="item-card__genre-wrapper">
              <li className="item-card__genre genre-style">Adventure</li>
              <li className="item-card__genre genre-style">Adventure</li>
              <li className="item-card__genre genre-style">Comedy</li>
            </ul>
            <h2 className="item-card__title">Guardians of the Galaxy Vol. 2</h2>
            <div className="item-card__ratings-runtime ratings-runtime">
              <div className="ratings-runtime__icon ratings-runtime__icon_green"> 7.6</div>
              <div className="ratings-runtime__icon">
                <div className="ratings-runtime__image">
                  <img src={imdb} alt="imdb" />
                </div>
                <div className="ratings-runtime__number">7.6</div>
              </div>
              <div className="ratings-runtime__icon">136 min</div>
            </div>
          </div>
          <div className="item-card__data-wrapper">
            <div className="item-card__poster poster">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
                alt="image"
              />
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
              <div className="item-card__genre-wrapper">
                <p className="item-card__genre genre-style">Adventure</p>
                <p className="item-card__genre genre-style">Adventure</p>
                <p className="item-card__genre genre-style">Comedy</p>
              </div>
              <h2 className="item-card__title">Guardians of the Galaxy Vol. 2</h2>
              <div className="item-card__ratings-runtime ratings-runtime">
                <div className="ratings-runtime__icon ratings-runtime__icon_green"> 7.6</div>
                <div className="ratings-runtime__icon">
                  <div className="ratings-runtime__image">
                    <img src={imdb} alt="imdb" />
                  </div>
                  <div className="ratings-runtime__number">7.6</div>
                </div>
                <div className="ratings-runtime__icon">136 min</div>
              </div>
            </div>
            <h3 className="item-card__plot">
              The Guardians struggle to keep together as a team while dealing with their personal family issues, notably
              Star-Lord's encounter with his father, the ambitious celestial being Ego.
            </h3>
            <ul className="item-card__characteristics">
              <li className="item-card__items">
                <p className="item-card__label">Year</p>
                <h3 className="item-card__meanning">2017</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Released</p>
                <h3 className="item-card__meanning">05 May 2017</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">BoxOffice</p>
                <h3 className="item-card__meanning">$389,813,101</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Country</p>
                <h3 className="item-card__meanning">United States</h3>
              </li>
              <li className="item-card__items">
                <p className="item-card__label">Production</p>
                <h3 className="item-card__meanning">Heyday Films, Moving Picture Company, Warner Bros.</h3>
              </li>

              <li className="item-card__items">
                <p className="item-card__label">Actors</p>
                <h3 className="item-card__meanning">Chris Pratt, Zoe Saldaña, Dave Bautista</h3>
              </li>

              <li className="item-card__items">
                <p className="item-card__label">Director</p>
                <h3 className="item-card__meanning">James Gunn </h3>
              </li>

              <li className="item-card__items">
                <p className="item-card__label">Writer</p>
                <h3 className="item-card__meanning">James Gunn, Dan Abnett, Andy Lanning</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

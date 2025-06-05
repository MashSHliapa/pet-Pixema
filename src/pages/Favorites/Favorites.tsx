import { useSelector } from 'react-redux';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import type { RootState } from '../../redux/store';
import type { ICatalogCard } from '../../types/interfaces';
import favoritesEmpty from '../../assets/image/favorites_empty.png';

export function Favorites() {
  const { data: posts } = useSelector((state: RootState) => state.favorites);
  const favoriteCards = posts.map((item: ICatalogCard) => <CatalogCard key={item.imdbID} post={item} />);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__cards">
            {favoriteCards.length < 1 ? <img src={favoritesEmpty} alt="favoritesEmpty" /> : favoriteCards}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useSelector } from 'react-redux';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import type { RootState } from '../../redux/store';
import './Catalog.scss';

export function Catalog() {
  const posts = useSelector((state: RootState) => state.catalog.data);
  const catalog = posts.map((item) => <CatalogCard key={item.imdbID} post={item} />);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__cards">{catalog}</div>
      </div>
    </div>
  );
}

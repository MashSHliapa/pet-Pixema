import { Catalog } from '../../pages/Catalog/Catalog';
import { ItemCard } from '../../pages/ItemCard/ItemCard';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Catalog />
      <ItemCard />
    </div>
  );
}

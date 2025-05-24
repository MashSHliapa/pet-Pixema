import { CatalogCard } from '../CatalogCard/CatalogCard';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <CatalogCard />
    </div>
  );
}

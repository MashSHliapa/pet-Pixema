import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { ShowMoreButton } from '../../components/ShowMoreButton/ShowMoreButton';
import type { RootState } from '../../redux/store';
import './Catalog.scss';

export function Catalog() {
  const [visibleCards, setVisibleCards] = useState(4);

  const posts = useSelector((state: RootState) => state.catalog.data);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevVisibleCount = useRef(visibleCards);

  const catalog = posts.slice(0, visibleCards).map((item, index) => (
    <div
      key={item.imdbID}
      ref={(el: HTMLDivElement | null): void => {
        cardRefs.current[index] = el;
      }}
    >
      <CatalogCard post={item} />
    </div>
  ));

  const handleShowMore = () => {
    prevVisibleCount.current = visibleCards;
    setVisibleCards((prev) => prev + 4);
  };

  useEffect(() => {
    if (visibleCards > prevVisibleCount.current) {
      const firstNewCardIndex = prevVisibleCount.current;
      const node = cardRefs.current[firstNewCardIndex];
      if (node) {
        const rect = node.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = scrollTop + rect.top - 20;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
      }
    }
  }, [visibleCards]);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__cards">{catalog}</div>
          {visibleCards < posts.length && (
            <div className="catalog__button">
              <ShowMoreButton handleShowMore={handleShowMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

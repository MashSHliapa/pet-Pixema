import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import './ShowMoreButton.scss';

export function ShowMoreButton({ handleShowMore }: { handleShowMore: () => void }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="show-more">
      <div className={theme ? 'show-more__body dark-field' : 'show-more__body light-field'} onClick={handleShowMore}>
        <h3 className="show-more__text">Show more</h3>
      </div>
    </div>
  );
}

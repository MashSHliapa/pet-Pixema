import './ShowMoreButton.scss';

export function ShowMoreButton({ handleShowMore }: { handleShowMore: () => void }) {
  return (
    <div className="show-more">
      <div className="show-more__body" onClick={handleShowMore}>
        <h3 className="show-more__text">Show more</h3>
      </div>
    </div>
  );
}

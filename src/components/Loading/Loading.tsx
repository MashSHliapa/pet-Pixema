import { useEffect, useState } from 'react';
import './Loading.scss';

export function Loading({ delay = 0 }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return isActive ? (
    <div className="loading">
      <div className="loading__spinner" />
    </div>
  ) : null;
}

import React, { useMemo } from 'react';
import styles from './Rating.module.css';

type RatingProps = {
  rating: number;
};

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const ratingStarts = useMemo(() => {
    return [0, 1, 2, 3, 4].map((item) => {
      if (rating >= item + 1) {
        return 'full';
      } else if (rating >= item + 0.5) {
        return 'half';
      }
      return '';
    });
  }, [rating]);

  return (
    <div className={styles.rating}>
      {ratingStarts.map((item, index) => (
        <span className={`${styles.star} ${styles[item]}`} key={index} />
      ))}
    </div>
  );
};

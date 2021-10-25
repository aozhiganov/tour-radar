import React from 'react';
import { Review } from './TourItem';
import { Rating } from '../Rating/Rating';
import styles from './TourItemReviews.module.css';

type TourItemReviewsProps = {
  reviews: Review;
};

export const TourItemReviews: React.FC<TourItemReviewsProps> = ({
  reviews,
}) => (
  <div className={styles.container}>
    <div className={styles.rating}>
      <Rating rating={reviews.avg} />
      <span className={styles.count}>{reviews.cnt}</span>
    </div>
    {reviews.sample && <div className={styles.sample}>{reviews.sample}</div>}
  </div>
);

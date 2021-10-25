import React from 'react';
import { TourItemImage } from './TourItemImage';
import styles from './TourItem.module.css';
import { TourItemReviews } from './TourItemReviews';

export type Review = {
  cnt: number;
  avg: number;
  sample: string;
};

export type Tour = {
  id: number;
  title: string;
  flexible_booking: boolean;
  reviews: Review;
  map_url: string;
  img_url: string;
  destinations: string[];
  length: number;
  age_min: number;
  age_max: number;
  regions: string[];
  travel_styles: string[];
  operated_in: string[];
  price: number;
};

type TourItemProps = {
  tour: Tour;
};

export const TourItem: React.FC<TourItemProps> = ({ tour }) => {
  return (
    <div className={styles.container}>
      <TourItemImage image={tour.img_url} map={tour.map_url} />
      <div className={styles.content}>
        <a href={`https://www.tourradar.com/t/${tour.id}`}>
          <h4 className={styles.title}>{tour.title}</h4>
        </a>
        <TourItemReviews reviews={tour.reviews} />
      </div>
    </div>
  );
};

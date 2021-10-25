import React from 'react';
import { Tour, TourItem } from '../TourItem/TourItem';

type TourItemListProps = {
  items: Tour[];
};

export const TourItemList: React.FC<TourItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <TourItem tour={item} key={item.id} />
      ))}
    </div>
  );
};

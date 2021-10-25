import React from 'react';
import { TourItemList } from '../TourItemList/TourItemList';
import { tourItems } from '../mock';

export const Challenge2: React.FC = () => (
  <div style={{ width: '500px' }}>
    <TourItemList items={tourItems} />
  </div>
);

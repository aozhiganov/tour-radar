import React, { useRef } from 'react';
import { useItemInViewport } from '../../hooks/useItemInViewport';
import styles from './TourItemImage.module.css';

type TourItemImageProps = {
  image: string;
  map: string;
};

export const TourItemImage: React.FC<TourItemImageProps> = ({ image, map }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInViewport = useItemInViewport(containerRef);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.image}
        style={isInViewport ? { backgroundImage: `url(${image})` } : undefined}
      />
      <div
        className={styles.map}
        style={isInViewport ? { backgroundImage: `url(${map})` } : undefined}
      />
    </div>
  );
};

'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import typography from '#@/styles/typography.module.css';
import Image from 'next/image';

export function PhotoSlideshow(
  {
    photosList,
  }: {
    photosList: {
      source: string;
      title: string;
      informacionAdicional: string;
    }[];
  }
) {
  const [
    index,
    setIndex
  ] = useState(
    0
  );

  const [
    showMore,
    setShowMore
  ] = useState(
    false
  );

  const currentPhoto = photosList[ index ] ?? {
    source              : '/cali1.jpg',
    title               : 'no definida',
    informacionAdicional: 'sin definir',
  };

  const {
    length
  } = photosList;

  function handleNextClick() {
    if ( length === index + 1 ) {
      return setIndex(
        0
      );
    }

    return setIndex(
      index + 1
    );
  }

  function handlePreviousClick() {
    if ( index === 0 ) {
      return setIndex(
        9
      );
    }

    return setIndex(
      index - 1
    );
  }

  function handleMoreClick() {
    setShowMore(
      !showMore
    );
  }

  return (
    <div className={styles.container}>
      <h5 className={`${ typography.headlineSmall } ${ styles.title }`}>
        {currentPhoto.title}
      </h5>
      <div className={styles.image}>
        <Image
          src={currentPhoto.source}
          alt={currentPhoto.title}
          fill={true}
        />
      </div>

      <div className={styles.segmentedButtonsRow}>
        <button
          type={'button'}
          onClick={handlePreviousClick}
          className={styles.button}
        >
          previous
        </button>
        <button
          type="button"
          onClick={handleMoreClick}
          className={styles.button}
        >
          {showMore
            ? 'Hide'
            : 'Show'} details
        </button>
        <button
          type={'button'}
          onClick={handleNextClick}
          className={styles.button}
        >
          Next
        </button>
      </div>
      {showMore && (
        <>
          <p className={typography.bodySmall}>
            {currentPhoto.informacionAdicional}
          </p>
        </>
      )}
    </div>
  );
}

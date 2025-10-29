import { Loader } from '#@/components/main-loader';
import { PhotoSlideshow } from '#@/components/photo_gallery/photo_gallery';
import VideoPlayer from '#@/components/video/videoPlayer';
import styles from '#@/styles/layout.module.css';
import { parallaxImage2 } from '#@/styles/page.module.css';
import { Suspense } from 'react';

export default function Page() {
  const photosList: {
    source: string;
    title: string;
    informacionAdicional: string;
  }[] = [
    {
      source              : '/cali1.jpg',
      title               : 'Cali 1',
      informacionAdicional: 'fotografía de cali 1',
    },
    {
      source              : '/cali2.jpg',
      title               : 'Cali 2',
      informacionAdicional: 'fotografía de cali 2',
    },
    {
      source              : '/cali3.jpg',
      title               : 'Cali 3',
      informacionAdicional: 'fotografía de cali 3',
    },
    {
      source              : '/cali4.jpg',
      title               : 'Cali 4',
      informacionAdicional: 'fotografía de cali 4',
    },
    {
      source              : '/cali5.jpg',
      title               : 'Cali 5',
      informacionAdicional: 'fotografía de cali 5',
    },
    {
      source              : '/cali6.jpg',
      title               : 'Cali 6',
      informacionAdicional: 'fotografía de cali 6',
    },
    {
      source              : '/cali7.jpg',
      title               : 'Cali 7',
      informacionAdicional: 'fotografía de cali 7',
    },
    {
      source              : '/cali8.jpg',
      title               : 'Cali 8',
      informacionAdicional: 'fotografía de cali 8',
    },
    {
      source              : '/cali9.jpg',
      title               : 'Cali 9',
      informacionAdicional: 'fotografía de cali 9',
    },
    {
      source              : '/cali10.jpg',
      title               : 'Cali 10',
      informacionAdicional: 'fotografía de cali 10',
    },
  ];

  return (
    <>
      <div className={parallaxImage2}></div>
      <div className={styles.textContainer}>
        <PhotoSlideshow photosList={photosList} />
        <div className={styles.sectionRow}>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/baileVideo.mp4'} />
            </Suspense>{' '}
          </div>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/salsa_baile_2.mp4'} />
            </Suspense>{' '}
          </div>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/salsa_baile_3.mp4'} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

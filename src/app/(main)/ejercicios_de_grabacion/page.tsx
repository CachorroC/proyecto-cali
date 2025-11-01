import { SectionDirection } from '#@/components/layout-section';
import { Loader } from '#@/components/main-loader';
import { PhotoSlideshow } from '#@/components/photo_gallery/photo_gallery';
import VideoPlayer from '#@/components/video/videoPlayer';
import { containerEnabled } from '#@/styles/elevated.module.css';
import styles from '#@/styles/layout.module.css';
import { parallaxImage2 } from '#@/styles/page.module.css';
import { bodyLarge, headlineLarge } from '#@/styles/typography.module.css';
import { Suspense } from 'react';

export default function Page() {
  const photosList: {
    source: string;
    title: string;
    informacionAdicional: string;
    height: number;
    width: number;
  }[] = [
    {
      source: '/cali1.jpg',
      title: 'Cali 1',
      height: 1200,
      width: 800,
      informacionAdicional: 'fotografía de cali 1',
    },
    {
      source: '/cali2.jpg',
      title: 'Cali 2',
      informacionAdicional: 'fotografía de cali 2',
      height: 720,
      width: 1280,
    },
    {
      source: '/cali3.jpg',
      title: 'Cali 3',
      informacionAdicional: 'fotografía de cali 3',
      height: 1194,
      width: 2560,
    },
    {
      source: '/cali4.jpg',
      title: 'Cali 4',
      informacionAdicional: 'fotografía de cali 4',
      height: 0,
      width: 0,
    },
    {
      source: '/cali5.jpg',
      title: 'Cali 5',
      informacionAdicional: 'fotografía de cali 5',
      height: 0,
      width: 0,
    },
    {
      source: '/cali6.jpg',
      title: 'Cali 6',
      informacionAdicional: 'fotografía de cali 6',
      height: 0,
      width: 0,
    },
    {
      source: '/cali7.jpg',
      title: 'Cali 7',
      informacionAdicional: 'fotografía de cali 7',
      height: 0,
      width: 0,
    },
    {
      source: '/cali8.jpg',
      title: 'Cali 8',
      informacionAdicional: 'fotografía de cali 8',
      height: 0,
      width: 0,
    },
    {
      source: '/cali9.jpg',
      title: 'Cali 9',
      informacionAdicional: 'fotografía de cali 9',
      height: 0,
      width: 0,
    },
    {
      source: '/cali10.jpg',
      title: 'Cali 10',
      informacionAdicional: 'fotografía de cali 10',
      height: 0,
      width: 0,
    },
  ];

  return (
    <>
      <div className={parallaxImage2}></div>
      <div className={styles.textContainer}>
        <div className={containerEnabled}>
          <div className={styles.sectionRow}>
            <div className={styles.sectionColumn}>
              <h2 className={headlineLarge}>Galería de fotos</h2>
              <p className={bodyLarge}>
                A continuación encontrará la galería de fotos que se realizó en
                las academias de baile.
              </p>
            </div>
            <PhotoSlideshow photosList={photosList} />
          </div>
        </div>

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

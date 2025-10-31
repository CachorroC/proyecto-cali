'use client';
import styles from '#@/styles/page.module.css';
import Link from 'next/link';
import { containerMain } from '#@/styles/layout.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={containerMain}>
      <div className={styles.parallaxImage1}></div>
      <div className={styles.contentComponent}>
        <h1 className={styles.titleParagraph}>Mujeres en su salsa</h1>
        <h3 className={styles.subtitleParagraph}>
          Análisis de la participación de las mujeres en el complejo dancístico
          y cultural de la salsa en Cali
        </h3>
        <div className={styles.logosBackground}>
          <Image
            src="/Logo_UAO.svg.png"
            width={250}
            height={250}
            alt="Logo universidad Autónoma de occidente"
          />
          <Image
            src="/logo_vertical_ur_rojo.png"
            width={250}
            height={250}
            alt="Logo universidad Autónoma de occidente"
          />
        </div>
        <Link
          className={styles.scrollButton}
          href={'/experimentos_visuales'}
        >
          <p>Entrar al contenido</p>
          <span className={'material-symbols-outlined'}>send</span>
        </Link>
      </div>
    </div>
  );
}

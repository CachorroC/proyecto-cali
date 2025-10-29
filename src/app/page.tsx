'use client';
import styles from '#@/styles/page.module.css';
import Link from 'next/link';
import { containerMain } from '#@/styles/layout.module.css';

export default function Home() {
  return (
    <div className={containerMain}>
      <div className={ styles.parallaxImage1 }></div>
      <div className={styles.contentComponent}>
        <h1 className={styles.titleParagraph}>
          Mujeres que bailan, ensayan, enseñan y heredan la salsa
        </h1>
        <h3 className={styles.subtitleParagraph}>
          Conservación y transmisión del baile de la salsa en Cali
        </h3>
        <Link
          className={styles.scrollButton}
          href={'/experimentos_visuales'}
        >

          Entrar al contenido
          <span className={'material-symbols-outlined'}>
            send
          </span>
        </Link>
      </div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import styles from '#@/styles/page.module.css';
import React, { useRef } from 'react';

export default function Home() {
  const targetRef = useRef<HTMLParagraphElement | null>(
    null 
  );

  const scrollToElement = () => {
    if ( targetRef.current ) {
      targetRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block   : 'start',
        } 
      );
    }
  };

  return (
    <>
      <button
        onClick={scrollToElement}
        className={styles.scrollButton}
      >
        lea más
      </button>
      {/* ... other content ... */}
      <div className={styles.parallaxImage1}></div>
      <p
        ref={targetRef}
        className={styles.textParagraph}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
        bibendum ligula, nec tincidunt libero. Phasellus bibendum mi diam, vel
        vestibulum quam bibendum sit amet. Aenean et nisi nec ipsum venenatis
        ultrices. Integer eleifend lorem eu risus placerat, non vehicula magna
        euismod. Fusce aliquam porta ipsum ut dapibus. Proin pretium massa ac
        justo maximus sollicitudin. Ut aliquet et risus quis lobortis. Ut cursus
        malesuada diam maximus auctor. Proin vulputate, metus a cursus vehicula,
        ipsum nibh euismod justo, eget vestibulum dolor elit nec risus.
      </p>
      <div className={styles.parallaxImage2}></div>
      <p className={styles.textParagraph}>
        Sed interdum mauris elit, et sollicitudin mauris feugiat a. Ut
        consectetur arcu eget odio scelerisque ultricies. Aenean lacinia, neque
        quis scelerisque volutpat, dui nisi auctor mi, eu rhoncus nisl nisl in
        nulla. In rhoncus nisi tellus, et suscipit odio consectetur eu.
        Pellentesque quis turpis euismod, aliquet urna ac, pretium ligula. Nulla
        at finibus felis. Cras sagittis magna placerat leo elementum, ut commodo
        urna porta. Sed at nunc eu eros gravida suscipit et ac massa. Curabitur
        elementum eleifend ante vitae volutpat. In eu convallis justo, et porta
        ipsum. Integer nec mi odio. This is the target element.
      </p>
      {/*  <div
        style={{
          position: 'relative',
          width   : '100vw',
          height  : '100vh',
        }}
      >
        <Image
          src="/salsabaile.jpg"
          fill={true}   width={'100%'} height={100%} style={{
        position: 'relative',
        width   : '100vw',
        height  : '100vh'
      } }
          alt="salsa baile cultural"
        />
      </div> */}
      {/* Placeholder for scrolling */}
      <p>This is the target element.</p>
      <div
        style={{
          height: '1000px',
        }}
      ></div>{' '}
      {/* Placeholder for scrolling */}
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <a
        className={styles.primary}
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
      </a>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        Read our docs
      </a>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}

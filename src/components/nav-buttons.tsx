'use client';

import { useRouter } from 'next/navigation';
import styles from '#@/styles/layout.module.css';
import { NavLink } from './NavLink';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { Route } from 'next';
import { buttonDrawerMenuClosed,
  buttonDrawerMenuOpen, } from '#@/styles/navbar.module.css';

// TODO: arreglar lo de la navegacion

export const DrawerMenuButton = () => {
  const {
    isNavOpen, setIsNavOpen
  } = useNavigationContext();

  return (
    <button
      type="button"
      className={isNavOpen
        ? buttonDrawerMenuOpen
        : buttonDrawerMenuClosed}
      onClick={() => {
        setIsNavOpen(
          (
            n
          ) => {
            return !n;
          }
        );
      }}
    >
      <span className={`material-symbols-outlined ${ styles.icon }`}>
        {isNavOpen
          ? 'close'
          : 'menu'}
      </span>
    </button>
  );
};

export default function NavButtons() {
  const {
    isNavOpen, setIsNavOpen
  } = useNavigationContext();

  return (
    <>
      <button
        type="button"
        className={styles.buttonDrawerClosed}
        onClick={() => {
          setIsNavOpen(
            !isNavOpen
          );
        }}
      >
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          {isNavOpen
            ? 'close'
            : 'menu'}
        </span>
      </button>
      <NavLink
        iconLabel={'home'}
        textLabel={'Inicio'}
        hrefLabel={'/' as Route}
      />
    </>
  );
}

export function ForwardBackwardNavButtons() {
  const router = useRouter();

  return (
    <section className={styles.segmentRow}>
      <button
        type="button"
        className={styles.buttonBackwards}
        onClick={() => {
          router.back();
        }}
      >
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          chevron_left
        </span>
        <p className={styles.text}>atras</p>
      </button>
      <button
        type="button"
        className={styles.buttonForward}
        onClick={() => {
          router.forward();
        }}
      >
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          chevron_right
        </span>
        <p className={styles.text}>entrar</p>
      </button>
    </section>
  );
}

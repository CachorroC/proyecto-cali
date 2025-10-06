'use client';
import styles from '#@/styles/layout.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { DrawerMenuButton } from './nav-buttons';
import { Drawer } from './Drawer';
import { NavLink } from './NavLink';
import { Route } from 'next';
import { Loader } from './main-loader';
import { Suspense } from 'react';

export const NavBar = () => {
  const {
    isNavOpen
  } = useNavigationContext();

  return (
    <div className={styles.header}>
      <DrawerMenuButton />

      {isNavOpen && (
        <Suspense fallback={<Loader />}>
          <Drawer>
            <DrawerMenuButton />
            <NavLink
              key={'home'}
              iconLabel={'home'}
              textLabel={'Inicio'}
              hrefLabel={'/' as Route}
            />
            <NavLink
              iconLabel={'contact_mail'}
              textLabel={'contáctenos'}
              hrefLabel={'/contacto'}
            />
            <NavLink
              iconLabel={'list'}
              textLabel={'mensajes del servidor'}
              hrefLabel={'/contacto/lista'}
            />
            <NavLink
              iconLabel={'bookmark_check'}
              textLabel={'créditos'}
              hrefLabel={'/creditos'}
            />
            <NavLink iconLabel={ 'taunt' } textLabel={ 'baile' } hrefLabel={ '/baile' } />
          </Drawer>
        </Suspense>
      )}
    </div>
  );
};

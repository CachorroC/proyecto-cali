'use client';
import styles from '#@/styles/layout.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { DrawerMenuButton } from './nav-buttons';
import { Drawer } from './Drawer';
import { NavLink } from './NavLink';
import { Route } from 'next';
import { Loader } from './main-loader';
import { Suspense } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const NavBar = () => {
  const {
    isNavOpen , setIsNavOpen
  } = useNavigationContext();

  return (
    <div className={styles.header}>
      {!isNavOpen && <DrawerMenuButton />}
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
              iconLabel={'woman'}
              textLabel={'Experimentos Visuales'}
              hrefLabel={'/experimentos_visuales'}
            />
            <NavLink
              iconLabel={'video_camera_back'}
              textLabel={'Ejercicios de Grabacion'}
              hrefLabel={'/ejercicios_de_grabacion'}
            />
            <NavLink
              iconLabel={'history_toggle_off'}
              textLabel={'Historias de Vida'}
              hrefLabel={'/historias_de_vida'}
            />
            <NavLink iconLabel={ 'special_character' } textLabel={ 'Reflexión final' } hrefLabel={ '/reflexion_final' } />
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
            <NavLink
              iconLabel={'taunt'}
              textLabel={'baile'}
              hrefLabel={'/baile'}
            />
          </Drawer>
        </Suspense>
      )}
    </div>
  );
};

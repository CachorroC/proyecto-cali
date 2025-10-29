import layout from '#@/styles/layout.module.css';
import { ReactNode } from 'react';
import { TopComponent } from './top-component';

export default function Layout(
  {
    children 
  }: { children: ReactNode } 
) {
  return (
    <div className={layout.container}>
      <TopComponent />
      {children}
    </div>
  );
}

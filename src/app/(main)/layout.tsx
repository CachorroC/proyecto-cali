import layout from '#@/styles/layout.module.css';
import { ReactNode } from 'react';

export default function Layout ({children}: {children: ReactNode})
{
  return (
    <div className={ layout.container }>
      {children}
  </div>
)
}
'use client';
import { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { sectionColumn, sectionRow } from '#@/styles/layout.module.css';

export function SectionDirection(
  {
    children 
  }: { children: ReactNode } 
) {
  const phoneMatch = useMediaQuery(
    '(max-width:600px)' 
  );

  return (
    <div className={phoneMatch
      ? sectionColumn
      : sectionRow}
    >{children}</div>
  );
}

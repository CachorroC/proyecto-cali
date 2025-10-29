'use client';

import { card } from '#@/styles/layout.module.css';
import { usePathname } from 'next/navigation';
import { headlineLarge } from '#@/styles/typography.module.css';
import { useEffect, useState } from 'react';

export function TopComponent () {



  const pathname = usePathname();

  const [
    clientPathname,
    setClientPathname
  ] = useState(
    '' 
  );

  useEffect(
    () => {
      const replacedSlash = pathname.replace(
        /\//g, '' 
      );

      const replacedSpace = replacedSlash.replace(
        /_/g, ' ' 
      );

      const replacedFirstLetter = replacedSpace.replace(
        /\b\w/g, (
          char 
        ) => {
          return char.toUpperCase();
        } 
      );

      setClientPathname(
        replacedFirstLetter 
      );
    }, [
      pathname
    ] 
  );

  return (
    <div className={ card }>
      <h1 className={headlineLarge}>{clientPathname}</h1>
    </div>
  );
}
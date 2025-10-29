import { containerMain } from '#@/styles/layout.module.css';
import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = await headers();

  const domain = headersList.get(
    'host'
  );

  return (
    <div className={containerMain}>
      <div
        style={{
          backgroundColor: 'var(--error-container)',
          color          : 'var(--on-error-container)',
          display        : 'flex',
          flexFlow       : 'column nowrap'
        }}
      >
        <h2>Not Found {domain}</h2>
        <p>Could not find requested resource</p>
        <pre style={ {
          textAlign: 'left'
        }}
        > {JSON.stringify(
            headersList, null, 2
          )}</pre>
      </div>
    </div>
  );
}

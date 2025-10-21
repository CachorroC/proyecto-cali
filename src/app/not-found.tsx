import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = await headers();

  const domain = headersList.get('host');

  return (
    <div
      style={{
        backgroundColor: 'var(--error-container)',
        color: 'var(--on-error-container)',
      }}
    >
      <h2>Not Found {domain}</h2>
      <p>Could not find requested resource</p>
      <pre> {JSON.stringify(headersList, null, 2)}</pre>
    </div>
  );
}

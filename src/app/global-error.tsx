'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            backgroundColor: 'var(--error-container)',
            color: 'var(--on-error-container)',
          }}
        >
          <h2>{error.name}</h2>
          <p>{error.message}</p>
          <button
            onClick={() => {
              return reset();
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

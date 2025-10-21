import { contactoCollection } from '#@/lib/connection/collections';
import styles from '#@/styles/elevated.module.css';

export default async function Page() {
  const arrayList = [];

  const collection = await contactoCollection();

  const listCollection = collection.find();

  for await ( const element of listCollection ) {
    const stringified = JSON.stringify(
      element 
    );

    const parsed = JSON.parse(
      stringified 
    );

    arrayList.push(
      parsed 
    );
  }

  return (
    <div
      style={{
        display : 'flex',
        flexFlow: 'column nowrap',
        gap     : '1rem',
      }}
    >
      {arrayList.map(
        (
          contacto 
        ) => {
          return (
            <div
              key={`${ contacto._id }`}
              className={styles.containerEnabled}
            >
              <h1>{contacto.nombre}</h1>
              <h3>{contacto.email}</h3>
              <sub>{contacto.telefono}</sub>
              <p>{contacto.mensaje}</p>
            </div>
          );
        } 
      )}
    </div>
  );
}

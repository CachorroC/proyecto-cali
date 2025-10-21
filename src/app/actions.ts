'use server';

import { contactoCollection } from '#@/lib/connection/collections';
import { contactoType } from '#@/types/contacto';

export async function addToCart(prevState: contactoType, queryData: FormData) {
  const email = queryData.get('email');

  const telefono = queryData.get('telefono');

  const nombre = queryData.get('nombre');

  const mensaje = queryData.get('mensaje');

  const inputForm = {
    email: `${email}`,
    nombre: `${nombre}`,
    telefono: `${telefono}`,
    mensaje: `${mensaje}`,
  };

  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const collection = await contactoCollection();

  await collection.insertOne(inputForm);

  const stringified = JSON.stringify(inputForm);

  const objectified = JSON.parse(stringified);

  return objectified as contactoType;
}

import { contactoType } from '#@/types/contacto';
import clientPromise from './mongodb';

export async function contactoCollection() {
  const client = await clientPromise;

  if (!client) {
    throw new Error('no hay cliente mongólico');
  }

  const db = client.db('proyecto-cali');

  const contacto = db.collection<contactoType>('contacto');

  return contacto;
}

'use client';
import { useActionState } from 'react';
import { addToCart } from '../../actions';
import { icon } from '#@/styles/layout.module.css';
import styles from '#@/styles/contacto.module.css';

function ContactoForm() {
  const [
    formState,
    formAction,
    isPending
  ] = useActionState(
    addToCart, {
      email   : '',
      nombre  : '',
      telefono: '',
      mensaje : '',
    }
  );

  return (
    <div
      className={styles.formContainer}
      id="formContainer"
    >
      <h1 className={styles.formTitle}>Contáctenos</h1>
      <form action={formAction}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            nombre
            <input
              className={styles.formInput}
              type="text"
              name="nombre"
              defaultValue={formState.nombre}
            />
          </label>
        </div>
        <label className={styles.formLabel}>
          email
          <input
            className={styles.formInput}
            type="email"
            name="email"
            defaultValue={formState.email}
          />
        </label>
        <label className={styles.formLabel}>
          telefono
          <input
            className={styles.formInput}
            type="tel"
            name="telefono"
            defaultValue={formState.telefono}
          />
        </label>
        <label className={styles.formLabel}>
          mensaje
          <textarea
            className={styles.formTextarea}
            name="mensaje"
            defaultValue={formState.mensaje}
          />
        </label>
        <button
          type="submit"
          className={styles.submitBtn}
        >
          <span className={`materialsymbolsoutlined ${ icon }`}>
            {isPending
              ? 'hourglass_bottom'
              : 'send'}
          </span>
        </button>
        {isPending
          ? 'Loading...'
          : 'enviada'}
      </form>
    </div>
  );
}

export default function Page() {
  return <ContactoForm />;
}

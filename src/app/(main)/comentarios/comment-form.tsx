'use client';

import { useActionState } from 'react';

import styles from '#@/styles/contacto.module.css';
import { icon } from '#@/styles/layout.module.css';
import { useActionContext } from '#@/app/context/comment-list-context';

export function CommentForm() {
  const {
    actionState, submitAction, isActionPending 
  } = useActionContext();

  return (
    <div
      className={styles.formContainer}
      id="formContainer"
    >
      <h1 className={styles.formTitle}>Contáctenos</h1>
      <form action={submitAction}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            id
            <input
              className={styles.formInput}
              type="number"
              name="id"
              defaultValue={actionState._id}
            />
          </label>

          <label className={styles.formLabel}>
            nombre
            <input
              className={styles.formInput}
              type="text"
              name="nombre"
              defaultValue={actionState.nombre}
            />
          </label>
        </div>
        <label className={styles.formLabel}>
          mensaje
          <textarea
            className={styles.formTextarea}
            name="mensaje"
            defaultValue={actionState.mensaje}
          />
        </label>
        <button
          type="submit"
          className={styles.submitBtn}
        >
          <span className={`material-symbols-outlined ${ icon }`}>
            {isActionPending
              ? 'hourglass_bottom'
              : 'send'}
          </span>
        </button>
        {isActionPending
          ? 'Loading...'
          : 'enviada'}
      </form>
    </div>
  );
}

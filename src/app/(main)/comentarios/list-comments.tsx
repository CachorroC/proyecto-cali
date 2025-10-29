'use client';
import {  useCommentsHandlersContext, useCommentsStateDispatchContext } from '#@/app/context/comment-list-context';
import elevatedModule from '#@/styles/elevated.module.css';
import { comentarioType } from '#@/types/comentarios';
import { useState } from 'react';

export function ListComments() {
  const {
    commentsState,
  } = useCommentsStateDispatchContext();

  return (
    <div
      style={{
        display : 'flex',
        flexFlow: 'column wrap',
        gap     : '1rem',
      }}
    >
      {commentsState.map(
        (
          contacto
        ) => {
          return (
            <div
              key={`${ contacto._id }`}
              className={elevatedModule.containerEnabled}
            >
              <h1>{contacto.nombre}</h1>
              <p>{contacto.mensaje}</p>
              <Task task={ contacto } />
            </div>
          );
        }
      )}
    </div>
  );
}


function Task(
  {
    task
  }: {task: comentarioType}
) {
  const [
    isEditing,
    setIsEditing
  ] = useState(
    false
  );

  const [
    messageState,
    setMessageState
  ] = useState(
    task.mensaje
  );


  const {
    handleChangeComment, handleDeletecomment
  } = useCommentsHandlersContext();

  let taskContent;

  if ( isEditing ) {
    taskContent = (
      <>
        <input
          value={messageState}
          onChange={(
            e
          ) => {
            setMessageState(
              e.target.value
            );
          }}
        />
        <button onClick={async() => {
          await handleChangeComment(
            {
              ...task,
              mensaje: messageState
            }
          );
          return setIsEditing(false)
        }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.mensaje}
        <button onClick={() => {
          return setIsEditing(
            true
          );
        }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      {taskContent}
      <button onClick={() => {
        handleDeletecomment(
          task._id ?? ''
        );
      }}
      >
        Delete
      </button>
    </label>
  );
}

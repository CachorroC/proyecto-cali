'use client';
// ActionProvider.js
import React, { ReactNode } from 'react';
import { useActionState, createContext, useContext } from 'react'; // Assuming React 19+
import { addComment} from '../actions';
import { comentarioType, formActionStateType } from '#@/types/comentarios';

const ActionContext = createContext<{
  actionState: comentarioType;
  submitAction:(
    payload: FormData ) => void;
  isActionPending: boolean;
} | null>( null
);

export const FormActionProvider = (
  {
    children, commentsLength
  }: { children: ReactNode;  commentsLength: number}
) => {

  const [
    state,
    formAction,
    isPending
  ] = useActionState(
    addComment,
{mensaje:'', nombre: '', _id: commentsLength ++}
  );

  return (
    <ActionContext.Provider
      value={{
        actionState    : state,
        submitAction   : formAction,
        isActionPending: isPending,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export const useActionContext = () => {
  const context = useContext(
    ActionContext
  );

  if ( !context ) {
    throw new Error(
      'useActionContext must be used within an ActionProvider'
    );
  }

  return context;
};

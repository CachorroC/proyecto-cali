'use client';
// ActionProvider.js
import React, { ActionDispatch, ReactNode, useReducer } from 'react';
import { useActionState, createContext, useContext } from 'react'; // Assuming React 19+
import { addComment,
  addCommentBasic,
  deleteComment,
  editCommentBasic, } from '../actions';
import { comentarioType, CommentsAction } from '#@/types/comentarios';
import { commentsReducer } from './comments-list-reducer';

const ActionContext = createContext<{
  actionState: comentarioType;
  submitAction:(
    payload: FormData ) => void;
  isActionPending: boolean;
} | null>( null 
);

const CommentsStateDispatchContext = createContext<{
  commentsState: comentarioType[];
  dispatchComments: ActionDispatch<[action: CommentsAction]>;
} | null>(
  null 
);

const CommentsHandlersContext = createContext<{
  handleAddcomment:(
    formData: FormData ) => Promise<void>;
  handleChangeComment: ( formData: comentarioType ) => Promise<void>;
  handleDeletecomment: ( commentId: number ) => Promise<void>;
} | null>( null 
);

export const FormListProvider = (
  {
    children,
    initialComments,
  }: {
    children: ReactNode;
    initialComments: comentarioType[];
  } 
) => {
  const [
    commentsState,
    dispatch
  ] = useReducer(
    commentsReducer,
    initialComments,
  );

  const [
    state,
    formAction,
    isPending
  ] = useActionState(
    addComment, {
      mensaje: '',
      nombre : '',
      _id    : commentsState.length + 1,
    } 
  );

  const handleAddcomment = async (
    formData: FormData 
  ) => {
    const result = await addCommentBasic(
      formData 
    );

    if ( result.success && result.inputForm ) {
      dispatch(
        {
          type   : 'add',
          payload: result.inputForm,
        } 
      );
    }
  };

  const handleChangeComment = async (
    formData: comentarioType 
  ) => {
    const result = await editCommentBasic(
      formData 
    );

    if ( result.success && result.inputForm ) {
      dispatch(
        {
          type   : 'change',
          id     : result.inputForm._id ?? 0,
          payload: result.inputForm,
        } 
      );
    }
  };

  const handleDeletecomment = async (
    commentId: number 
  ) => {
    const result = await deleteComment(
      commentId 
    );

    if ( result.success ) {
      dispatch(
        {
          type: 'delete',
          id  : commentId,
        } 
      );
    }
  };

  return (
    <CommentsStateDispatchContext.Provider
      value={{
        commentsState,
        dispatchComments: dispatch,
      }}
    >
      <CommentsHandlersContext.Provider
        value={{
          handleAddcomment,
          handleChangeComment,
          handleDeletecomment,
        }}
      >
        <ActionContext.Provider
          value={{
            actionState    : state,
            submitAction   : formAction,
            isActionPending: isPending,
          }}
        >
          {children}
        </ActionContext.Provider>
      </CommentsHandlersContext.Provider>
    </CommentsStateDispatchContext.Provider>
  );
};

export const useCommentsStateDispatchContext = () => {
  const context = useContext(
    CommentsStateDispatchContext 
  );

  if ( !context ) {
    throw new Error(
      'usecommentsContext must be used within an ActionProvider' 
    );
  }

  return context;
};

export const useCommentsHandlersContext = () => {
  const context = useContext(
    CommentsHandlersContext 
  );

  if ( !context ) {
    throw new Error(
      'usecommentsContext must be used within an ActionProvider' 
    );
  }

  return context;
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

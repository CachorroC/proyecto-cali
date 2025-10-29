'use server';

import { contactoCollection } from '#@/lib/connection/collections';
import { comentarioType,  formActionStateType } from '#@/types/comentarios';
import { revalidateTag } from 'next/cache';


export async function addCommentBasic(
  queryData: FormData,
) {

  const nombre = queryData.get(
    'nombre'
  );

  const mensaje = queryData.get(
    'mensaje'
  );
  const id = queryData.get('id')

  const inputForm = {
    nombre  : `${ nombre }`,
    mensaje: `${ mensaje }`,
    _id: parseInt( `${ id }` )
  };

  // Add a fake delay to make waiting noticeable.
  await new Promise(
    (
      resolve
    ) => {
      setTimeout(
        resolve, 2000
      );
    }
  );

  const collection = await contactoCollection();

  const insertion = await collection.insertOne(
    inputForm
  );

  const stringified = JSON.stringify(
    inputForm
  );

  const objectified = JSON.parse(
    stringified
  );

  revalidateTag(
    'comment', 'max'
  );

  if ( insertion.acknowledged === false ) {
    return {
      inputForm: null,
      success  : false
    };
  }

  return {
    inputForm: {
      ...inputForm,
      _id: parseInt(insertion.insertedId.toString())
    },
    success: true
  };
}

export async function addComment(
  prevState: comentarioType,
  queryData: FormData,
) {


  const nombre = queryData.get(
    'nombre'
  );

  const mensaje = queryData.get(
    'mensaje'
  );

  const id = queryData.get('id')

  const inputForm = {
    nombre  : `${ nombre }`,
    mensaje: `${ mensaje }`,
    _id: parseInt(`${ id }`)
  };


  const collection = await contactoCollection();

  const insertComment = await collection.insertOne(
    inputForm
  );

  const stringified = JSON.stringify(
    inputForm
  );

  const objectified = JSON.parse(
    stringified
  );

  revalidateTag(
    'comment', 'max'
  );

  return objectified as comentarioType;
}
export async function deleteComment ( commentId: number )
{
  const collection = await contactoCollection();
  const deleteCommentAction = await collection.deleteOne( { _id: commentId } )
  if ( deleteCommentAction.acknowledged === false ) {
    return {
      success  : false
    };
  }

  return {
    success: true
  };
}

export async function editCommentBasic(
  queryData: comentarioType,
) {

  const inputForm = {
    nombre  : `${ queryData.nombre }`,
    mensaje : `${ queryData.mensaje }`,
  };

  const collection = await contactoCollection();

  const editDocument = await collection.updateOne(
    {
      _id: queryData._id
    }, {
      $set: {
        mensaje: inputForm.mensaje,
      }
    }
  );
  console.log( editDocument.acknowledged );
  console.log(editDocument.modifiedCount)
  if ( editDocument.acknowledged === false ) {
    return {
      inputForm: null,
      success  : false
    };
  }

  return {
    inputForm: {
      ...inputForm,
      _id: parseInt(editDocument.upsertedId?.toString() ?? '')
    },
    success: true
  };

}

export async function myActionFunction(
  prevState: formActionStateType,
  queryData: FormData,
): Promise<formActionStateType> {
  const email = queryData.get(
    'email'
  );

  const telefono = queryData.get(
    'telefono'
  );

  const nombre = queryData.get(
    'nombre'
  );

  const mensaje = queryData.get(
    'mensaje'
  );

  const id = queryData.get(
    '_id'
  );

  const inputForm = {
    nombre  : `${ nombre }`,
    mensaje: `${ mensaje }`,
    _id: parseInt(`${ id }`)
  };

  const collection = await contactoCollection();

  if ( prevState.delete ) {
    const deletResult = await collection.deleteOne(
      {
        _id: parseInt(`${ id }`),
      }
    );

    return {
      ...prevState,
      delete: false,
    };
  }

  if ( id ) {
    const updteOne = await collection.updateOne(
      {
        _id: parseInt(`${ id }`)
      },
      {
        nombre  : inputForm.nombre,
        mensaje : inputForm.mensaje,
      },
    );

    return {
      success: updteOne.acknowledged,
      id     : updteOne.upsertedId
        ? updteOne.upsertedId.toString()
        : `${ id }`,
      error  : null,
      delete : null,
      edit   : null,
      message: inputForm
    };
  }

  const insertOne = await collection.insertOne(
    inputForm
  );

  const stringified = JSON.stringify(
    inputForm
  );

  const objectified = JSON.parse(
    stringified
  );

  revalidateTag(
    'comment', 'max'
  );

  return {
    success: insertOne.acknowledged,
    error  : false,
    delete : false,
    edit   : false,
    id     : insertOne.insertedId.toString(),
    message: {
      ...inputForm,
      _id: parseInt(insertOne.insertedId.toString())
    },
  };



}

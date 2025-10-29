export type comentarioType = {
  nombre: string;
  mensaje: string;
  _id: number
};


export type formActionStateType = {
  success: boolean | null;
  error: boolean |null;
  delete: boolean | null;
  edit: boolean | null;
  id: string | null;
  message: comentarioType

}


export type SortActionType = {
  type: 'sort';
  dir: boolean;
  sortingKey:
    | 'carpetaNumero'
    | 'id'
    | 'dueDate'
    | 'createdAt'
    | 'text'
    | 'updatedAt';
};

export type UpdateActionType = {
  type: 'change';
  id: number;
  payload: comentarioType;
};

export type DeleteActionType = {
  type: 'delete';
  id: number;
};

export type ResetActionType = {
  type: 'reset';
  payload: comentarioType[];
};

export type AddActionType = {
  type: 'add';
  payload: comentarioType;
};


export type CommentsAction =
  | AddActionType
  | DeleteActionType
  | ResetActionType
  | UpdateActionType
  | SortActionType;

import { comentarioType, CommentsAction } from '#@/types/comentarios';

export function commentsReducer(
  commentsState: ( comentarioType )[],
  action: CommentsAction,
) {
  switch ( action.type ) {
      case 'add': {
        return [
          ...commentsState,
          {
            ...action.payload,
          },
        ];
      }

      case 'change': {
        return commentsState.map(
          (
            t
          ) => {
            if ( t._id === action.id ) {
              return action.payload;
            }

            return t;

          }
        );
      }

      case 'delete': {
        return [
          ...commentsState
        ].filter(
          (
            t
          ) => {
            return t._id !== action.id;
          }
        );
      }

      default: {
        return [
          ...commentsState
        ];
      }
  }
}
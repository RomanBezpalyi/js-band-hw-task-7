import { ActionTypes } from './actions';

const selectedTodoId = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ID:
      return payload;
    case ActionTypes.DELETE_ID:
      return null;
    default:
      return state;
  }
};

export default selectedTodoId;

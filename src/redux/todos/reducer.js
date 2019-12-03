import { ActionTypes } from './actions';

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return [...state, payload];
    case ActionTypes.UPDATE_TODO:
      return [...state.filter(todo => todo.id !== payload.id), payload];
    case ActionTypes.DELETE_TODO:
      return [...state.filter(todo => todo !== payload)];
    default:
      return state;
  }
};

export default todos;

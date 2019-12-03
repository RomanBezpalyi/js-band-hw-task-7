import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import isModalOpen from './modalController/reducer';
import selectedTodoId from './selectedTodoId/reducer';
import todos from './todos/reducer';

const rootReducer = combineReducers({
  todos,
  isModalOpen,
  selectedTodoId,
});

const enhancer =
  process.env.NODE_ENV === 'development' ? devToolsEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;

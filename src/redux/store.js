import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import isModalOpen from './modalController/reducer';
import todoInEditMode from './todoInEditMode/reducer';
import todos from './todos/reducer';
import filters from './filters/reducer';

const rootReducer = combineReducers({
  todos,
  isModalOpen,
  todoInEditMode,
  filters,
});

const enhancer =
  process.env.NODE_ENV === 'development' ? devToolsEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;

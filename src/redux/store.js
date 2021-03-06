import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { loadState, saveState } from './loadState';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

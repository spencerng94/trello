import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

// const persistedState = loadState();

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe(throttle(() => {
//   saveState({

//   });
// }, 1000));

export default store;
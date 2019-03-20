import { createStore, applyMiddleware, compose } from 'redux';
import formReducer from '../reducers/formReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
let middleware;
let composer;


if (process.env.NODE_ENV === 'development') {
  middleware = [
    logger,
  ];
  composer = composeWithDevTools;
} else {
  middleware = [];
  composer = compose;
}

export default function configureStore() {

  const storage = createStore(
    formReducer, undefined, composer(applyMiddleware(...middleware),
    )
  )

  if (module.hot) {
      module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      storage.replaceReducer(nextReducer);
    });
  }

  return storage;
}
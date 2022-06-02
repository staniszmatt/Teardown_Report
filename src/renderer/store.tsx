/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
// import * as modalActions from './actions/modalActions';
// import * as teardownActions from './actions/teardownActions';
// import monitorReducerEnhancer from './middleware/monitorReducer';

export default function configureAppStore() {
  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  const middleware = [];
  // const enhancers = [];

  middleware.push(thunkMiddleware);
  // Skip redux logs in console during the tests and if in production mode
  // Add any other dev middleware here
  if (
    process.env.NODE_ENV !== 'test' &&
    process.env.NODE_ENV === 'development'
  ) {
    middleware.push(logger);
  }

  // Redux DevTools Configuration
  // const actionCreators = {
  //   ...modalActions,
  //   ...teardownActions,
  // };

  // Skip redux logs in console during the tests and if in production mode
  // Add any other dev enhancer here
  // if (
  //   process.env.NODE_ENV !== 'test' &&
  //   process.env.NODE_ENV === 'development'
  // ) {
  //   enhancers.push(monitorReducerEnhancer);
  // }

  // enhancers.push(applyMiddleware(...middleware));
  // enhancers.push(...actionCreators);

  // const middlewareEnhancer = applyMiddleware(...middleware);
  // const composedEnhancers = compose(...enhancers);

  const store: any = configureStore({
    reducer: rootReducer,
    middleware,
    // composedEnhancers,
  });

  return store;
}

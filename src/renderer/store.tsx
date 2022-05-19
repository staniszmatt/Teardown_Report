/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import modals from './reducers/modalFilter';
// import monitorReducerEnhancer from './middleware/monitorReducer';
import { modalFilters } from './actions/modalActions';

export default function configureAppStore(initialState) {
  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  const middleware = [];
  // const enhancers = [];

  // Skip redux logs in console during the tests and if in production mode
  // Add any other dev middleware here
  if (
    process.env.NODE_ENV !== 'test' &&
    process.env.NODE_ENV === 'development'
  ) {
    middleware.push(logger);
  }

    // Redux DevTools Configuration
    const actionCreators = {
      ...modalFilters
    };

    const setEnhancer = compose(...actionCreators);

  // Skip redux logs in console during the tests and if in production mode
  // Add any other dev enhancer here
  // if (
  //   process.env.NODE_ENV !== 'test' &&
  //   process.env.NODE_ENV === 'development'
  // ) {
  //   enhancers.push(monitorReducerEnhancer);
  // }

  // enhancers.push(applyMiddleware(...middleware));

  const store: any = configureStore({
    reducer: rootReducer,
    middleware,
    enhancers: setEnhancer,
  });

  return store;
}

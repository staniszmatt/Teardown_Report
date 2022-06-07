import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

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

  const store: any = configureStore({
    reducer: rootReducer,
    middleware,
  });

  return store;
}

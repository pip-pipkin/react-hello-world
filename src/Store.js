import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './store/rootReducer'

const isDevelopment = () => process.env.NODE_ENV === 'development'

const immutableMiddleware = reduxImmutableStateInvariant()

const getMiddleware = () => {
  // Middleware for any and all environments
  const middleware = []

  // Dev Only Middleware
  const devMiddleware = [immutableMiddleware]

  return isDevelopment() ? [...middleware, ...devMiddleware] : middleware
}

// Configure Store
export const configureStore = () => {
  return createStore(
    rootReducer,
    isDevelopment()
      ? composeWithDevTools(applyMiddleware(...getMiddleware()))
      : applyMiddleware(...getMiddleware())
  )
}

export default configureStore
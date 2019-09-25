import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './store/rootReducer'
import initSagas from './store/initSagas'

const isDevelopment = () => process.env.NODE_ENV === 'development'

const sagaMiddleware = createSagaMiddleware()
const immutableMiddleware = reduxImmutableStateInvariant()

const getMiddleware = () => {
  // Middleware for any and all environments
  const middleware = [sagaMiddleware]

  // Dev Only Middleware
  const devMiddleware = [immutableMiddleware]

  return isDevelopment() ? [...middleware, ...devMiddleware] : middleware
}

// Configure Store
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    isDevelopment()
      ? composeWithDevTools(applyMiddleware(...getMiddleware()))
      : applyMiddleware(...getMiddleware())
  )
  initSagas(sagaMiddleware)

  return store
}

export default configureStore
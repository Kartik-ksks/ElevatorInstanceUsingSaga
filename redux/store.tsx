import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'

import RootReducer from './reducers/RootReducer'
import RootSagas from './sagas/RootSagas'

const makeStore = context => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware),
  )

  store.sagaTask = sagaMiddleware.run(RootSagas)

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper

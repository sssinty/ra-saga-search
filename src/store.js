import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import skillsSlice from './slices/skills.js'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/index.js'

// next === dispatch => action
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    counter: counterSlice,
    skills: skillsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})
// store.getState()
sagaMiddleware.run(saga)

export default store

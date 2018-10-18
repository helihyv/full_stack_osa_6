import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const combinedReducer = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer
})
const store = createStore(combinedReducer)

export default store
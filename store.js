import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import usersReducer from './reducers/userReducer'
import postsReducer from './reducers/postsReducer'




//InitialState
const InitialState = {
  posts: {},
  users: {}
}

// REDUCERS
const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
})


export function initializeStore (initialState = InitialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

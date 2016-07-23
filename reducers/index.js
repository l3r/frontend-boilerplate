import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import {
  RESET_ERROR_MESSAGE,
  RESET_SUCCESS_MESSAGE
} from '../actions'

import layout from './layout'

// Loading Operations
const isLoading = (state, action) => {
  if(typeof state === 'undefined')
    return 0;

  if(action.toggleLoading)
    return state + 1
  else if(action.didLoad) {
    return state > 0 ? state - 1 : 0
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state, action) => {
  if(typeof state === 'undefined')
    return null;

  const { type, error } = action
  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }
  return state
}

// Updates success messages
const successMessage = (state, action) => {
  if(typeof state === 'undefined')
    return null;

  const { type, success } = action
  if (type === RESET_SUCCESS_MESSAGE) {
    return null
  } else if (success) {
    return action.success
  }
  return state
}

const rootReducer = combineReducers({
  routing,
  successMessage,
  errorMessage,
  isLoading,
  layout
})

export default rootReducer
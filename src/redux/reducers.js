import { combineReducers } from 'redux'

const user = (state = null) => state

const listings = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_LISTINGS':
      return [...state, action.value]
    default: 
      return state
  }
}

const map = (state = [], action) => {
  return state
}

export default combineReducers({ user, listings, map })
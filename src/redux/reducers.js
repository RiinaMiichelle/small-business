import { combineReducers } from 'redux'

const user = (state = null) => state

const listings = (state = [], action) => {
  const newState = [ ...state ];
  switch(action.type) {
    case 'ADD_LISTING':
      action.value.id = newState.length + 1;
      newState.push(action.value)
      return newState
    case 'DELETE_LISTING':
      // find the index of the listing to delete
      let indexToDelete = -1;
      state.forEach((listing, idx) => {
        if (listing.id === action.value) {
          indexToDelete = idx;
        }
      });

      // If the listing does not exist don't splice
      if (indexToDelete === -1) {
        return newState;
      }

      newState.splice(indexToDelete, 1);
      return newState;
    default: 
      return state
  }
}

const map = (state = [], action) => {
  return state
}

export default combineReducers({ user, listings, map })
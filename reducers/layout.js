import {
  LAYOUT_TOGGLE_NAVBAR
} from '../actions'

const initialState = {
  displayNavbar: false
}

const layout = (state = initialState, action) => {
  switch(action.type) {
    case LAYOUT_TOGGLE_NAVBAR:
      return {
        ...state,
        displayNavbar: !state.displayNavbar
      }
    default:
      return state
  }
}

export default layout
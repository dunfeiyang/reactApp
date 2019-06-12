import * as types from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => { 
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === types.CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState
  } else if (action.type === types.ADD_ITEM) {
    newState.list.push(state.inputValue)
    newState.inputValue = '';
    return newState
  } else if (action.type === types.DELETE_ITEM) {
    newState.list.splice(action.value, 1)
    return newState
  } else if (action.type === types.INIT_LIST) {
    newState.list = action.data;
    return newState
  }

  return state
}
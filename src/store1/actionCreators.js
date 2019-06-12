import * as types from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = (value) => ({
  type: types.ADD_ITEM,
  value
})

export const getDeleteItemAction = (value) => ({
  type: types.DELETE_ITEM,
  value
})

export const initListAction = (data) => ({
  type: types.INIT_LIST,
  data
})

export const getTodList = () => {
  return (dispatch) => {
    axios.get('/mock/list.json').then(res => {
      const data = res.data;
      dispatch(initListAction(data))
    })
  }
}

export const getInitList = (data) => ({
  type:types.GET_INIT_LIST,
  data
})
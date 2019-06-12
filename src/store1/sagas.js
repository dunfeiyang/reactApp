import { takeEvery ,put} from 'redux-saga/effects'
import axios from 'axios'
import * as types from './actionTypes'
import * as actions from './actionCreators'

function* getInitList() {
  const res = yield axios.get('/mock/list.json');
  yield put(actions.initListAction(res.data));
}

function* mySaga() {
  yield takeEvery(types.GET_INIT_LIST, getInitList)
}
export default mySaga
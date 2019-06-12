import React, { Component } from 'react';
import 'antd/dist/antd.css'

import store from './store'
import * as actions from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();

    this.handelInputChage = this.handelInputChage.bind(this)
    this.handelStoreChange = this.handelStoreChange.bind(this)
    this.handelButonClick = this.handelButonClick.bind(this)
    this.handelItemClick = this.handelItemClick.bind(this)
    //监听变化
    store.subscribe(this.handelStoreChange)
  }

  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      handelInputChage={this.handelInputChage}
      handelButonClick={this.handelButonClick}
      handelItemClick={this.handelItemClick}
      list={this.state.list}
    />
  }
  componentDidMount() {
    //thunk
    store.dispatch(actions.getTodList())
    //saga
    // store.dispatch(actions.getInitList())
  }

  handelInputChage(e) {
    store.dispatch(actions.getInputChangeAction(e.target.value))
  }

  handelButonClick() {
    store.dispatch(actions.getAddItemAction())
  }

  handelItemClick(index) {
    store.dispatch(actions.getDeleteItemAction(index))
  }

  handelStoreChange() {
    this.setState(store.getState());
  }
}
export default TodoList
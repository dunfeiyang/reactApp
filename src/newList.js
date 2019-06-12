import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actionCreators'

class NewList extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <input value={this.props.inputValue} onChange={this.props.handelInputChange}/>
        <button onClick={this.props.handelButtonClick}>提交</button>  
        <ul>
          {
            this.props.list.map((item,index) => {
              return <li key={index} onClick={() => (this.props.itemClick(index)) }>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//store.dispatch , props
const mapDispatchToProps = (dispatch) => {
  return {
    handelInputChange(e) {
      dispatch(actions.getInputChangeAction(e.target.value))
    },
    handelButtonClick() {
      dispatch(actions.getAddItemAction())
    },
    itemClick(index) {
      dispatch(actions.getDeleteItemAction(index))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewList);
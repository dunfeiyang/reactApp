import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <div>
        <div>
          <Input onChange={this.props.handelInputChage} value={this.props.inputValue} placeholder='请输入' style={{ width: '300px', marginRight: '10px' }}></Input>
          <Button type="primary" onClick={this.props.handelButonClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {
              this.props.handelItemClick(index)
            }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default TodoListUI;
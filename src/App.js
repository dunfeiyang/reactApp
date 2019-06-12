import React, { Fragment } from 'react';
import './App.css';
import Item from './item'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '<h1>dfy</h1>',
      name: ''
    }
    this.inputChange = this.inputChange.bind(this)
  }

  //在组件即将被挂在到页面的时刻
  componentWillMount() {
    console.log('componentWillMount')
  }

  //组件被更新之前, 返回boolean值。
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }

  //组件被更新之前，在shouldComponentUpdate之后，在shouldComponentUpdate之后返回true才执行。
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  //组件被更新后
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  //当组件从父组件接受了参数
  //只要父组件的render函数重新执行了，子组件这个生命周期就会执行
  //如果组件第一次存在父组件中，不会执行
  //组件之前存在于父组件中，才会会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }


  //组件从页面移除时
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

   //组件被挂载到页面之后
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        {/* 注释 */}
        <div className="App">
          <header dangerouslySetInnerHTML={{ __html: this.state.text }}>

          </header>
          <label htmlFor='input'>input</label>
          <input id='input' value={this.state.name} onChange={this.inputChange} ref={(input) => { this.input = input }} />

          <Item item={this.state.name}/>
        </div>
      </Fragment>
    );
  }


  inputChange(e) {
    const value = this.input.value;
    this.setState(() => ({
      name: value
    }))
  }

}

export default App;

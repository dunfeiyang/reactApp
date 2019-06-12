This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



* 声明式开发
* 可以与其他框架并存
* 组件化
* 单向数据流
* 视图层框架
* 函数式的编程

## propTypes、defaultProps 默认值

```
class.propTypes = {
    text: PropTypes.string
}

class.defaultProps = {
    text: 'dfy'
}
```
## props、state、render
> 当组件的props 或者 state 改变的时候，render函数就会重新执行

> 当父组件的render 函数执行时，子组件的render都会被重新执行

## 生命周期
#### initalization

* setup props and state


#### Mounting
*componentWillReceiveProps
 > 当组件从父组件接受了参数
 
 > 只要父组件的render函数重新执行了，子组件这个生命周期就会执行。++如果组件第一次存在父组件中，不会执行；组件之前存在于父组件中，才会会执行。++

* componentWillMount
> 在组件即将被挂在到页面的时刻

* render
> 组件挂载

* componentDidMount
> 组件被挂载到页面之后

#### updation

* shouldComponentUpdate
> 组件被更新之前, 返回boolean值。

* componentWillUpdate
> 组件被更新之前，在shouldComponentUpdate之后，在shouldComponentUpdate之后返回==true==才执行。

* componentDidUpdate
> 组件被更新后


#### unmounting
* componentWillUnmount
> 组件从页面移除时

## 生命周期函数的使用

#### 性能优化 


```
//bind只执行一次
constructor(){
    //...bind(this)
}

//避免子组件render
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }
}


```

#### 其他生命周期函数的使用

```
//ajax的调用
//只会被执行一次
//比componentWillMount好
//constructor也可以，建议在：
componentDidMount(){
    
}

```

## Redux



```
                  <----
Action---->Store       Reducer
Creater       |    ---->
              |
             React
             Components
```


 
```
graph LR
ReactComponents-->ActionCreators
```

 
```
graph LR
ActionCreators-->Store
```
      

```
sequenceDiagram
Store->>Reducers: previosState,action
Reducers->>Store: newState
```
      
```
graph LR
Store-->ReactComponents
```

* store是唯一的
* 只有store能改变自己的内容
* Reducer必须是纯函数



##### API
* createStore
* store.dispathch
* store.getState
* store.subscribe



## redux-thunk
action和store中间键

对于dispatch升级可以接收一个函数作为参数
这样就可以在action里使用axios,

```
//js
store.dispatch(actions.getTodList())
```

 
```
//actionCreators
export const getTodList = () => {
  return (dispatch) => {
    axios.get('/mock/list.json').then(res => {
      const data = res.data;
      dispatch(initListAction(data))
    })
  }
}
```
                   

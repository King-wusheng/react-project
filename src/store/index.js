import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers'
//applyMiddleware  给redux装载了thunk中间件 将dispatch第一次可派发一个函数 第二次可派发一个扁平对象
const store = createStore(reducers,applyMiddleware(thunk))
export default store
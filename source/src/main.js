/**
 * @file 主入口
 * @author ielgnaw(wuji0223@gmail.com)
 */

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import DataList from './components/DataList';
import rootReducer from './reducers';

require('./main.styl');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DataList />
        );
        /*return (
            <i className="icon-mute iconfont"></i>
            <img src={require('./css/img/react-logo.png')} style={{height: '50px', width: '50px'}}/>
        );*/
    }
}

// applyMiddleware 来自 redux 可以包装 store 的 dispatch
// thunk 作用是使 action 创建函数可以返回一个 function 代替一个 action 对象
const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// 初始 state
const initialState = {};

// 创建store
const store = createStoreWithMiddleware(
    // 主 reducer,包括多个子reducer
    rootReducer,
    initialState
);

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);

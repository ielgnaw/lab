/**
 * @file main reducers
 * @author ielgnaw(wuji0223@gmail.com)
 */

import {combineReducers} from 'redux';
import dataList from './dataList';

// 使用 redux 的 combineReducers 方法将所有 reducer 打包起来
export default combineReducers({
    dataList
});

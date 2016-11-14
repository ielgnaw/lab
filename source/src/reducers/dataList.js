/**
 * @file DataList reducer
 * @author ielgnaw(wuji0223@gmail.com)
 */

import data from '../data';
import {INIT} from '../actions/dataList';

// reducer 其实是个方法，参数是 state 和 action，返回值是新的 state
export default function counter(state = data.dataList, action) {
    switch (action.type) {
        case INIT:
            return state;
        default:
            return state;
    }
}

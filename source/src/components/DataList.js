/**
 * @file DataList 组件
 * @author ielgnaw(wuji0223@gmail.com)
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {init} from '../actions/dataList';

require('./DataList.styl');

class DataList extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id="content" className="container items">
                {
                    data.map((item) => {
                        console.log(item);
                        return (
                            <a key={item.id} className="item thumbnail" href={item.link} target="_blank">
                                <div className="title">{item.title}</div>
                                <div className="tag">{item.tag}</div>
                                <div className="desc">{item.desc}</div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

DataList.propTypes = {
    init: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

/**
 * 将 state.counter 绑定到 props 的 counter
 * 参数从 reducer 中拿到，这里就可以通过 rootReducer 拿到其他组件的 reducer 即其他组件的 state 绑定到自己的 props 上
 *
 * @param {Object} state state 对象
 *
 * @return {Object} 对象
 */
const mapStateToProps = state => {
    return {
        data: state.dataList
    };
};

/**
 * 将 action 的所有方法绑定到 props 上
 *
 * 这里也可以简写，直接把 action 中的方法全部绑定上
 *     import {bindActionCreators} from 'redux';
 *     import * as CounterActions from '../actions/counter';
 *
 *     return bindActionCreators(CounterActions, dispatch);
 *
 * @param {Function} dispatch connect 的 dispatch
 *
 * @return {Object} action 里的方法的对象集合
 */
function mapDispatchToProps(dispatch) {
    return {
        init() {
            dispatch(init());
        }
    };
}

// 通过 connect 把需要的 state 中的数据和 actions 中的方法绑定到 props 上
export default connect(mapStateToProps, mapDispatchToProps)(DataList);

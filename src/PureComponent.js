import {
    Component
} from './Component';
import {
    inherits
} from './util';

export function PureComponent(props, key, ref, context) {
    return Component.apply(this, arguments);
}
var fn = inherits(PureComponent, Component);
//返回false 则不进行之后的渲染
fn.shouldComponentUpdate = function (nextProps, nextState, context) {
    var ret = true;;
    var a = shallowEqual(this.props, nextProps);
    var b = shallowEqual(this.state, nextState);
    if (a === false && b === false) {
        ret = false;
    }
    return ret;
}

function shallowEqual(now, next) {
    if (Object.is(now, next)) {
        return false;
    }
    //必须是对象
    if ((now && typeof now !== 'object') || (next && typeof next !== 'object')) {
        return '不是对象';
    }
    var keysA = Object.keys(now);
    var keysB = Object.keys(next);
    if (keysA.length !== keysB.length) {
        return '键值对 不一样';
    }
    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(next, keysA[i]) || !Object.is(now[keysA[i]], next[keysA[i]])) {
            return 'different';
        }
    }
    return false;
}
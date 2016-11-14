/**
 * @file 全局数据
 * @author ielgnaw(wuji0223@gmail.com)
 */

const supportTouch = ('ontouchstart' in window)
        || window.DocumentTouch && document instanceof window.DocumentTouch;

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

export default {
    touchStartEvent: (supportTouch ? 'touchstart' : 'mousedown'),
    touchMoveEvent: (supportTouch ? 'touchmove' : 'mousemove'),
    touchEndEvent: (supportTouch ? 'touchend' : 'mouseup')
};

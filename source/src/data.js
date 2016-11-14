/**
 * @file 全局数据
 * @author ielgnaw(wuji0223@gmail.com)
 */

const supportTouch = ('ontouchstart' in window)
        || window.DocumentTouch && document instanceof window.DocumentTouch;

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

const CHAR_ARR = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

/**
 * create uuid
 *
 * @return {string} uuid
 */
const generateUUID = () => {
    let d = new Date().getTime();
    // xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    return 'yxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : ( r & 0x3 | 0x8)).toString(16);
    });
};

export default {
    touchStartEvent: (supportTouch ? 'touchstart' : 'mousedown'),
    touchMoveEvent: (supportTouch ? 'touchmove' : 'mousemove'),
    touchEndEvent: (supportTouch ? 'touchend' : 'mouseup'),
    dataList: [
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        },
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        },
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        },
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
                + '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        },
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        },
        {
            id: generateUUID(),
            title: '标题',
            tag: 'HTML',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            link: '/demo'
        }
    ]
};

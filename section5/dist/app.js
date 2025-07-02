"use strict";
// let num = 10;
let num = Math.floor(Math.random() * 5) + 1;
//Math.random() * (max - min) + minを表している
console.log(num);
switch (num) {
    case 1:
        console.log('大吉');
        break;
    case 2:
        console.log('中吉');
        break;
    case 3:
        console.log('小吉');
        break;
    case 4:
        console.log('吉');
        break;
    case 5:
        console.log('凶');
        break;
    default:
        console.log('それ以外');
        break;
}

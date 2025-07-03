"use strict";
//for...of
//iterableオブジェクト　 = 反復可能オブジェクト　　配列や文字列
//配列や文字列を取り出すのにfor ofが使える
const colors = ['Red', 'Green', 'Blue'];
for (const color of colors) {
    console.log(color);
}
;
const str = 'TypeScript';
for (const character of str) {
    console.log(character);
}
;

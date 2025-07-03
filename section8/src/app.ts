//ループの入れ子
//二次元配列を取り出すのに使う

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

//配列の中に配列を入れることw二次元配列という
const scores = [
    [100, 99, 98],
    [90, 89, 88],
    [80, 79, 78]
];

// console.log(scores[0][0]);
// console.log(scores[0][1]);
// console.log(scores[0][2]);
// console.log(scores[1][0]);
// console.log(scores[1][1]);
// console.log(scores[1][2]);
// console.log(scores[2][0]);
// console.log(scores[2][1]);
// console.log(scores[2][2]);

for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        console.log(scores[i][j]);
    }
}
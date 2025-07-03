"use strict";
//演習　
const scores = [100, 90, 80, 70, 60];
let sumScore = 0;
let averageScore = 0;
for (let i = 0; i < scores.length; i++) {
    sumScore += scores[i];
}
averageScore = sumScore / scores.length;
console.log(`合計値: ${sumScore}`);
console.log(`平均値: ${averageScore}`);

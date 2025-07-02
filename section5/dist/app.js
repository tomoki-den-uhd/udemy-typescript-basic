"use strict";
const mass = 60;
const height = 1.7;
const bmi = mass / (height * height);
console.log(bmi);
if (bmi >= 25) {
    console.log('肥満');
}
else if (bmi >= 18.5) {
    console.log('普通');
}
else {
    console.log('痩せ');
}

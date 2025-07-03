"use strict";
//オプショナルなプロパティ ?を使う
class User {
    name;
    age = 0;
}
const olivia = new User;
console.log(olivia.name);
console.log(olivia.age);
olivia.name = 'Olivia';
console.log(olivia.name);

"use strict";
//アクセシビリティ修飾子　public private
//例えばageを出力しないという要件がある時にprivateを使える
class User {
    name = '';
    age = 0;
    //関数(メソッド)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}
const olivia = new User('Olivia', 23);
console.log(olivia.name);
// console.log(olivia.age); //error
console.log(olivia.isAdult());

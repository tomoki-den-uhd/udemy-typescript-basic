"use strict";
//クラス宣言はインスタンスの型を作る
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
//oliviaの方はUser型になる
//new Userの型はUser型
const olivia = new User('Olivia', 23);
const lian = new User('Liam', 25);

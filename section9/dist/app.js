"use strict";
//クラスの継承
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
class AdminUser extends User {
    adminRole = 1;
    sayAdminRole() {
        console.log(`My admin role is ${this.adminRole}.`);
    }
}
const emma = new AdminUser('Emma', 16);
console.log(emma.name);
console.log(emma.isAdult());
emma.sayAdminRole();

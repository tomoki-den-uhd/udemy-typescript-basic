"use strict";
//コンストラクタも子クラスは親クラスを上書きできる
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
    constructor(name, age, adminRole) {
        super(name, age);
        this.adminRole = adminRole;
    }
    sayAdminRole() {
        console.log(`My admin role is ${this.adminRole}.`);
    }
    isAdult() {
        return true;
    }
}
const emma = new AdminUser('Emma', 0, 2);
console.log(emma.name);
emma.sayAdminRole();
console.log(emma.isAdult());

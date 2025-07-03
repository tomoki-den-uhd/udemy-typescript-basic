"use strict";
//メソッドを使う
class User {
    name = '';
    age = 0;
    isAdult() {
        return this.age >= 18;
    }
    setAge(age) {
        this.age = age;
    }
}
const olivia = new User();
console.log(olivia.age);
console.log(olivia.isAdult());
olivia.setAge(23);
console.log(olivia.age);
console.log(olivia.isAdult());
const liam = new User;
liam.setAge(18);
console.log(liam.age);
console.log(liam.isAdult());

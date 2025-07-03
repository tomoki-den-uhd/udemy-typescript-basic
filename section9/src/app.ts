//メソッドを使う

class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 18;
    }

    setAge(age: number) {
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
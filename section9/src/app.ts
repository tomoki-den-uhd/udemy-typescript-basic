//コンストラクタを使おう

class User {
    readonly name: string = '';
    age: number = 0;

    //関数(メソッド)
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >=18;
    }

    // コンストラクタにはreadonlyでも代入できるが、それ以外はできない
    // setName(name:string) {
    //     this.name = name;
    // }
}

const olivia = new User('Olivia', 23);

console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());



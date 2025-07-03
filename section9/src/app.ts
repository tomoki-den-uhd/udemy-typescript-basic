//アクセシビリティ修飾子　public private
//例えばageを出力しないという要件がある時にprivateを使える

class User {
    name: string = '';
    private age: number = 0;

    //関数(メソッド)
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >=18;
    }

}

const olivia = new User('Olivia', 23);
console.log(olivia.name);
// console.log(olivia.age); //error
console.log(olivia.isAdult());





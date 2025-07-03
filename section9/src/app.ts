//クラス宣言はインスタンスの型を作る

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

//oliviaの方はUser型になる
//new Userの型はUser型
const olivia = new User('Olivia', 23);
const lian: User = new User('Liam', 25);




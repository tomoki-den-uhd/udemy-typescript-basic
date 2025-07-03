//プロパティを読み取り専用にする

class User {
    readonly name: string = 'Yuta Nakamura';
    age: number = 0;
}

const nakamura = new User;
// nakamura.name = 'Olivia'; //読み取り専用のプロパティに代入はできないerror

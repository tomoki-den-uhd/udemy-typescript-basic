// オブジェクト(連想配列)
// いくつかの値をまとめたデータ
// 1つの変数名でデータをまとめて入れておける
// プロパティ名と式で一つの要素になる


// name = 'nakamura' 
// name = プロパティ名(キー)
// 'nakamura'  = 式(値)

const user = {
    name: 'Yuta Nakamura',
    gender: 'man',
    age: 21
};

//ドット記法を使って取り出す
console.log(user.name);
console.log(user.gender);
console.log(user.age);

//ブラケット記法を使って取り出す
console.log(user['name']);
console.log(user['gender']);
console.log(user['age']);

user.age =22;
console.log(user.age);


user['age'] = 23;
console.log(user['age']);

//プロパティの個数を求める
console.log(Object.keys(user).length);

//プロパティの一覧を取得
console.log(Object.keys(user));

//型を明示的に示したい場合
const user2: {
    name: string,
    gender: string,
    age: number
} = {
    name: 'Yuta Nakamura',
    gender: 'man',
    age: 20
};
// user2.age = '23'; //NG
// user2.prefecture = 'Tokyo' //NG

console.log(user2.name);
console.log(user2.gender);
console.log(user2.age);


//インターフェイス宣言でオブジェクトの型をあらかじめ宣言できる
interface UserObj {
    name: string,
    gender: string,
    age?: number
}

const user3: UserObj = {
    name: 'Yuta Nakamura',
    gender: 'man',
    // age: 20
};

console.log(user3.name);
console.log(user3.gender);
console.log(user3.age);
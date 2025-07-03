//オプショナルなプロパティ ?を使う

class User {
    name?: string;
    age: number = 0;
}

const olivia = new User
console.log(olivia.name);
console.log(olivia.age);

olivia.name = 'Olivia';
console.log(olivia.name);

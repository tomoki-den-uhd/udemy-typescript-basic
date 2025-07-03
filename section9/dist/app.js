"use strict";
//プロパティを読み取り専用にする
class User {
    name = 'Yuta Nakamura';
    age = 0;
}
const nakamura = new User;
// nakamura.name = 'Olivia'; //読み取り専用のプロパティに代入はできないerror

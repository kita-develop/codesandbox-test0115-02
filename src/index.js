/**
 * const,let
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var 変数は再宣言可能
// var val1 = "var変数再宣言で上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// //letは上書き可能
// val2 = "let変数の上書き";
// console.log(val2);

//letは再宣言不可
//let val2 = "aaa";

// //const
// const val3 = "const変数";

// //val3 = "const変数上書き不可";
// // const val3 = "const変数再宣言も不可";

// const val4 = {
//   name: "北原",
//   age: 45
// };
// //構造体にするとメンバの値は変更できる
// val4.name = "さとし";
// //メンバーの追加も可能
// val4.address = "Osaka";
// console.log(val4);

// //配列
// const val5 = ["dog", "cat"];
// //配列の要素の値もconstでも上書き可能
// val5[0] = "bird";
// //要素の追加も可能
// val5.push("monkey");
// console.log(val5);

//Reactは基本constを使う、上書きするならletを使う

// /**
//  * テンプレート文字列
//  */
// const name = "北原";
// const age = 45;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法(shift+@)ダブルクオートやシングルクオートの代わりにバックティック文字 (` `)
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("hello"));

// const func1_val = func1;

// console.log(func1_val("hello2"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("hello3"));

// const func2_1 = (str) => {
//   return str;
// };

// console.log(func2_1("hello2_1"));

// const func2_2 = (str) => {
//   return str;
// };

// console.log(func2_2("hello2_2"));

// const func2_3 = (str) => {
//   return str + "こんいちは！";
// };

// console.log(func2_3("hello2_3"));

// const func2_4 = (str) => str;
// console.log(func2_4("hello2_4"));
// const func2_5 = () => "固定の文字列";
// console.log(func2_5());

// const func2_6 = () => console.log(func2_5());
// func2_6();

// function func3(num1, num2) {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

/**
 * 分割代入
 */
//オブジェクトを定義
// const myProfile = {
//   name: "北原",
//   age: 45
// };

// const message10 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;

// console.log(message10);

// //オブジェクトからプロパティを抽出する
// const { name, age } = myProfile;

// const message20 = `名前は${name}です。年齢は${age}です。。`;

// console.log(message20);

// // 配列を定義
// const myProfile = ["北原", 45];

// const message10 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;

// console.log(message10);

// //配列から要素を抽出する
// const [name, age] = myProfile;

// const message20 = `名前は${name}です。年齢は${age}です。。`;

// console.log(message20);

// /**
//  * デフォルト値、引数など
//  */

// const sayHello = (name) => console.log(`こんには！${name}`);
// sayHello("北原");

// const sayHello2 = (name = "ゲスト") => console.log(`こんには！${name}`);
// sayHello2();
// sayHello2("test");

/**
 * スプレッド構文 ...
 */
// //配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(10,11);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1,);

// //配列をまとめる
// const arry2 = [1, 2, 3, 4, 5, 6];
// const [num1, num2, ...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

// //配列のコピー、結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];
// const arry6 = [...arry4];
// console.log(arry6);
// //値をコピーしている
// const arry7 = [...arry4, ...arry5];
// console.log(arry7);
// arry5[1] = 4444;
// console.log(arry5);
// console.log(arry7);

// //ポインタをコピー
// const arry8 = arry7;
// arry8[0] = 11111;
// console.log(arry7);
// console.log(arry8);

/**
 * map,filter
 */
// const nameArry = ["田中", "斎藤", "北原"];
// for (let i = 0; i < nameArry.length; i++) {
//   console.log(`${i+1}番目は${nameArry[i]}です`);
// }

// const nameArryFrommap = nameArry.map((name) => {
//   if (name === "北原") {
//     return name;
//   }
//   return name+"様";
// });
// console.log(nameArryFrommap);

// nameArry.map((name)=>console.log(name+"さま"));
// nameArry.map((name,i)=>console.log(`${i+1}番目は${name}です`));

// const numArry = [1,2,3,4,5,-1,-2,6];

// //filter
// const newNumArry = numArry.filter((n) => {
//   if( n === 1)
//   {
//     return true;
//   }
//   else if (n <= 0) {
//     return false;
//   } else {
//     return n % 2 ===1;
//   }
// })
// console.log(newNumArry);
//要約
//mapは連想配列の要素を受け取ってコンバートして返す
//filterは条件判定する関数を引数で渡してフィルターする

/**
 * 三項演算子
 */
// ある条件？条件がtureの時：条件がfalseの時
const val1 = 1 < 2 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
console.log(typeof 123);
console.log(typeof "123");

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超過" : "範囲内です";
};
console.log(checkSum(10, 90));
console.log(checkSum(10, 91));

/**
 * 論理演算子 && ||
 */
// 左辺&&右辺:左辺がfalseなら左辺を返す.左辺がtrueなら右辺を返す
// 左辺||右辺:左辺がfalseなら右辺を返す.左辺がtrueなら左辺を返す

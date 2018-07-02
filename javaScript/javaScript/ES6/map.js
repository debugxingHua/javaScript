let map = new Map();
let keyObj = {};
let keyFnc = function () {};
let keyString = "keyStr";
let noNumber = Number("aaa");

//添加键值对
map.set(keyObj,"键·对象");
map.set(keyFnc,"键·function");
map.set(keyString,"键·字符串");
map.set(noNumber,"键·NAN");

// console.log(map.size);
// console.log(map);

//获取值
// console.log(map.get(keyObj));
// console.log(map.get({}));
// console.log(map.get(keyFnc));
// console.log(map.get(function(){}));
// console.log(map.get(keyString));
// console.log(map.get("keyStr"));
// console.log(map.get(noNumber));
// console.log(map.get(NaN));

////迭代1
// for(let [key,value] of map){
//     console.log(key + ":" + value);
// }
////迭代2
// for (let key of map.keys()) {
//     console.log(key);
// }
////迭代3
// for (let value of map.values()) {
//     console.log(value);
// }
////迭代4
// for (let [key, value] of map.entries()) {
//     console.log(key + " = " + value);
// }
////迭代4
// map.forEach(function (value ,key) {
//     console.log(key + ":" + value);
// },map);
//这里传入的map是可选参数，指代this的值
// let aaa = {
//     "a" : 1,
//     "b" : 2
// };
// map.forEach(function (value ,key) {
//     console.log(key + ":" + value);
//     console.log(this.a);
// },aaa);
// 映射与数组对象的关系
let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用映射对象常规的构造函数将一个二维键值对数组对象转换成一个映射关系
let myMap = new Map(kvArray);
myMap.get("key1"); // 返回值为 "value1"
// 使用展开运算符将一个映射关系转换成一个二维键值对数组对象
console.log([...myMap]); // 将会向您显示和kvArray相同的数组
// 或者使用展开运算符作用在键或者值的迭代器上，进而得到只含有键或者值得数组
console.log([...myMap.keys()]); // 输出 ["key1", "key2"]
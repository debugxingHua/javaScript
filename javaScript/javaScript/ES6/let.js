//new个对象
let mySet = new Set();
//添加数字、str、布尔
mySet.add(123);
mySet.add("你好");
mySet.add(456);
mySet.add(true);
//再来一个引用类型
var o = {
    a : 1,
    b : 2
};
mySet.add(o);
//前面的指向和此处不同，所以可以添加
mySet.add({a:1,b:2});
// console.log(mySet);
// console.log(mySet.length);//undefined
// console.log(mySet.size);
// //has()判断
// console.log(mySet.has("你好"));
// console.log(mySet.has(123));
// console.log(mySet.has("你好啊"));
// //删除“你好”
// if(mySet.delete("你好")){
//     console.log("删除成功");
// }
// console.log(mySet);
//
// //返回一个与map对象相似的键值相等的数据结构
// console.log(mySet.entries());
// console.log(mySet.keys());//这兄弟两个有毛用？
// console.log(mySet.values());//感觉一样哦
//迭代set
//迭代1
// for(let i of  mySet){
//     console.log(i);
// }
//迭代2
// for (let i of mySet.keys()) console.log(i);
// for (let item of mySet.values()) console.log(item);
//迭代3
// for (let [key, value] of mySet.entries()) console.log(key,value);
//迭代4
// mySet.forEach(function (value) {
//     console.log(value);
// });
//转set为array
// var arr = Array.from(mySet);
// console.log(arr);
// let myArray = ["value1", "value2", "value3"];
// 用Set构造器将Array转换为Set,new Set(array);
// let mySet2 = new Set(myArray);
// mySet.has("value1"); // returns true
// 用...(展开操作符)操作符将Set转换为Array
// console.log([...mySet2]); // 与myArray完全一致

// 如果在HTML文档中工作，也可以：这个是干啥玩意用的
// mySet.add(document.body);
// mySet.has(document.querySelector("body")); // true

//交叉元素
// let set2 = new Set([123,11,1111,456]);
// let intersection = new Set([...mySet].filter(x => set2.has(x)));
// console.log(intersection);

//String,会拆分哦
// let text = 'Indiana';
// let mySet3 = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
// console.log(mySet3.size);  // 5


//weakSet

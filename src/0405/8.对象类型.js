// TS中的对象类型就是在**描述对象的结构**（有什么类型的属性和方法）
// 属性类型注意是分号分隔
let person8_1 = {
    name: 'Tom',
    age: 18,
    sayHi: (msg) => {
        console.log(msg);
    },
};
console.log(person8_1.sayHi('hi hello'));
// 一行只有一个属性类型可以省略分号
let person8_2 = {
    name: 'Tom',
    age: 18,
    sayHi: (msg) => {
        console.log(msg);
    },
};

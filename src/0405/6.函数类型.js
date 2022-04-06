// 函数的类型实际上就是：函数参数和函数返回值的类型
// 两种方式：
// 1 单独指定参数、返回值的类型
// 函数声明
function add6(num1, num2) {
    return num1 + num2;
}
add6(2, 3);
// 函数表达式
const add6_2 = (num1, num2) => {
    return num1 + num2;
};
add6_2(2, 3);
// 2 同时指定参数、返回值的类型
// 只适用于函数表达式
const add6_3 = (num1, num2) => {
    return num1 + num2;
};
add6_3(2, 3);
// 函数返回值 void 类型
function greet6_1(name) {
    console.log(`Hello, ${name}`);
}
const greet6_2 = (name) => {
    console.log(`Hello, ${name}`);
};

// 枚举的功能类似于字面量类型+ 联合类型组合的功能，也可以表示一组明确的可选值
// 枚举：定义一组命名常量
// 1. 数字美剧（默认)：枚举成员是数字的枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
// 类似于js中的对象，直接通过 . 语法访问枚举的成员
var dir = Direction.Up;
// 枚举成员设置初始值
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 12] = "Up";
    Direction2[Direction2["Down"] = 13] = "Down";
    Direction2[Direction2["Right"] = 14] = "Right";
    Direction2[Direction2["Left"] = 15] = "Left";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 0] = "Up";
    Direction3[Direction3["Down"] = 12] = "Down";
    Direction3[Direction3["Right"] = 13] = "Right";
    Direction3[Direction3["Left"] = 14] = "Left";
})(Direction3 || (Direction3 = {}));
(function (Direction3) {
    Direction3[Direction3["U"] = 19] = "U";
})(Direction3 || (Direction3 = {}));
var dir2 = Direction3.Down;
// 2. 字符串枚举：枚举成员是字符串的枚举
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "up";
    Direction4["Down"] = "down";
    Direction4["Right"] = "right";
    Direction4["Left"] = "left";
})(Direction4 || (Direction4 = {}));

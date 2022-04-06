// 枚举的功能类似于字面量类型 + 联合类型组合的功能，也可以表示一组明确的可选值
// > 枚举是TS 为数不多的非js 类型级扩展
// > 其他类型仅仅被当作类型，而枚举不仅用作类型，还提供值（枚举成员都是有值的）
// > 也就是说，其他的类型会在编译为js 代码时自动移除，但是，枚举剋小姐会被编译为js 代码

// 一般情况下，推荐字面量类型 + 联合类型组合的方式，因为相比枚举，这种方式更加直观，简洁，高效

// 枚举：定义一组命名常量

// 1. 数字美剧（默认)：枚举成员是数字的枚举
enum Direction { Up, Down, Right, Left }

// 类似于js中的对象，直接通过 . 语法访问枚举的成员
const dir: Direction = Direction.Up

// 枚举成员设置初始值
enum Direction2 { Up = 12, Down, Right, Left }

enum Direction3 { Up, Down = 12, Right, Left }
enum Direction3 { U = 19 }
const dir2: Direction3 = Direction3.Down



// 2. 字符串枚举：枚举成员是字符串的枚举
enum Direction4 { 
  Up = 'up', 
  Down = 'down', 
  Right = 'right', 
  Left = 'left' 
}

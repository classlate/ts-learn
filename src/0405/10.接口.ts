
interface Person10 {
  name: string
  age: number
  // sayHi: () => void
  sayHi() : void
}

let person10_1: Person10 = {
  name: 'Tom',
  age: 18,
  sayHi: () => {}
}


// ## 接口 与 类型别名 的对比

// 相同点：
// 1. 都可以给对象指定类型

type Person10_type = {
  name: string
  age: number
  // sayHi: () => void
  sayHi() : void
}

let person10_2: Person10_type = {
  name: 'Tom',
  age: 18,
  sayHi: () => {},
}

// 不同点：
// 1. 接口只可以给对象指定类型；类型别名可以为任意类型指定别名

// ## 接口继承
// 如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来， 通过继承来实现复用
interface Point2D {
  x: number
  y: number
}

interface Point3D extends Point2D {
  z: number
}

let _2d: Point2D = {
  x: 1,
  y: 2,
}

let _3d: Point3D = {
  x: 1,
  y: 2,
  z: 3,
}

console.log(_3d.x)

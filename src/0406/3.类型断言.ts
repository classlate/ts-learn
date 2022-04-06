// 有时候你会比TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型

// 1. as 关键字实现（推荐）
const a = document.getElementById('link') as HTMLAnchorElement;
console.log(a.href)

// 2. <>语法，与react jsx 语法有冲突
const a2 = <HTMLAnchorElement>document.getElementById('link')
console.log(a2.href)

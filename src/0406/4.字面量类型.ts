let str1 = 'Hello'

// 将明确的值作为类型
const str2 = 'Hello TS'
const str2_2: 'Hello TS' = 'Hello TS'
const num2 = 12
const num2_2: 12 = 12

// 1. 字面量常配合联合类型使用
// 2. 用来表示一组明确可选值列表

function changeDirection(dir: 'left' | 'right' | 'top' | 'bottom') {
  console.log(dir)
}
changeDirection('top')

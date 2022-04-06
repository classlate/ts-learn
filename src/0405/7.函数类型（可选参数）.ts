// 可选参数需放到必选参数后面
function fn7_1(start?: number, end?: number): number[] {
  return [start, end]
}
console.log(fn7_1())
console.log(fn7_1(1))
console.log(fn7_1(2, 5))

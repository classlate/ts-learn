// 元组类型是另一种类型的数组，它确切地知道包含多少个元素，以及特定索引对应的类型

let position: [number, number] = [1, 2]

type Position = [number, number]

let position_type: Position = [1, 2]

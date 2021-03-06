# TypeScript 学习

## 基本类型

### 原始类型

- string
- number
- bigint
- boolean
- null
- undefined
- symbol

#### 特殊

##### any

> 不推荐

隐式具有 any 类型的情况：
- 声明变量不提供类型且不赋值
- 函数参数不加类型

##### unknown

##### never

### 数组类型

> 原始类型 + []

- string[]
- number[]
- ...


#### 元组

> 对数组对应索引的类型声明  
> [原始类型, 原始类型, ...]

- [string, number, boolean]

### 对象类型

> 对对象属性的类型声明  
> 形式类型对象， 注意分隔符为 `;` 而非 `,`  
> 换行书写时 `;` 可省略  

- `{ foo: string; bar: number }`
- 

  ```ts
    {
      foo: string
      bar: number
    }
  ```

### 函数类型

> 对函数参数及函数返回值的类型声明

- 

  ```ts
    // 函数声明
    // 参数：string number
    // 返回值：boolean
    function fn(foo: string, bar: number): boolean {
      // ...
    }
  ```

- 
  
  ```ts
    // 函数表达式
    // 参数：string number
    // 返回值：boolean
    const fn = (foo: string, bar: number): boolean => {
      // ...
    }

    // 同时指定参数及返回值
    const fn: (foo: string, bar: number) => boolean = (foo, bar) => {
      // ...
    }
  ```

## 联合类型

> 可拥有多个类型  
> `|` 分隔  

- string | number

## 字面量类型

> 将值作为类型  
> 常配合联合类型应用，表示在一组明确值范围内可取的值

- 
  
  ```ts
    let foo: 1 | 2 | 3 | 4 = 1
  ```

## 类型声明

### 接口

> 对一组类型的集合声明，常用于对象  
> 声明关键字 `interface` 
> 可扩展继承，关键字 `extends`

- 
  
  ```ts
    interface Person {
      name: string
      age: number
      say(msg: string): string
    }
  ```

### 别名

> 当作变量用于对类型的存储  
> 声明关键字 `type`  

- 
  
  ```ts
    type num = 1 | 2 | 3 | 4
    type Person = {
      name: string
      // ...
    }
  ```

### 枚举

> 解析后会额外生成代码以支持，推荐使用字面量类型 + 联合类型替代使用  
> 声明关键字 `enum`，`,`分隔

- 
  
  ```ts
    enum Gender {
      MAN,
      WOMAN
    }
    const he: Gender = Gender.MAN
  ```

## 类型推论

> 自动推断类型  

- 声明并赋值时
- 决定函数返回值时

## 类型断言

> 优先级高于TS类型推论的声明

- 

  ```ts
    // 关键字 `as`
    const f00 = 1 as number
    const obj = {
      foo: '1' as string,
      bar: 2 as number,
    }
  ```

- 

  ```ts
    // `<>` 
    const foo = <number>1
    const obj = {
      foo: <string>'1',
      bar: <number>2,
    }
  ```

## 标识符

> 关键字 & 运算符  

### interface 定义接口

### type 定义别名

### enum 定义枚举

### extends 接口扩展

### typeof 类型获取

> 类型上下文中使用时  
> 只能查询变量或对象属性的类型  

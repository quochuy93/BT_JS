// Solve problems: 3W1H => What Why When How
// Javascript

// Say hello world with JavaScript
// console.log('Hello World!')
// alert('Hello World!')
// Ctrl + . => Generate getter, setter

// 1. Declare variable with var keyword
// Syntax: var <variable_name> [= <value>];

// var avatar
// var fullName = 'Quyen Dang'
// var age = 18
// var languages = ['Tiếng Việt', 'Tiếng Anh', 'Lập Trình']
// var info = {
//   id: 1,
//   name: 'Quyen Dang',
//   age: 36,
//   favorites: ['coding', 'reading', 'traveling'],
//   account: {
//     id: 1,
//     name: 'Tran Quyen',
//     // ...
//   },
// }

// Ctrl + Alt + L
// console.log(`🚀 | avatar:`, avatar)
// console.log(`🚀 | fullName:`, fullName)
// console.log(`🚀 | age:`, age)
// console.log(`🚀 | languages:`, languages)
// console.log(`🚀 | info:`, info)

// Set Name (Name Convention)
// 1. camelCase (*)
// 2. snake_case (id in html)
// 3. SNAKE_CASE_ALL_CAP (*)
// 4. kebab-case (class in html)
// 5. PascalCase (OOP) (*)

// 1
// var fullName, storyOfAuthor, yourLocation

// 3
// var PI = 3.14
// var APP_API = 'http://localhost:3000'
// var CONFIG = {
//   version: '0.2.1',
//   author: 'John Smith',
//   // ....
// }
// var FIREBASE_LOGIN_API = 'http://firebase-api'

// 2. Comment In JS
/*
  1. Uses
    - Note
    - Disable

  2. Comment
    - Single Comment
    - Multiple Comment
    - Comment DOC (Library)

  3. Shortcut key
   - Ctrl + ?
   - Shift + Alt + A
*/

// Single comment

/*
  Multiple comment
  Multiple comment
  Multiple comment
 */

// /**
//  *
//  * Sum of array
//  *
//  * @param {*} n - count of array
//  *
//  * @return {*} Sum - sum of array
//  * @author Quyen Dang <quyendang@gmail.com>
//  * @created 05/04/2023
//  */
// function sum(n) {
//   return 0
// }

// sum()

// 3. Built-in function
/*
  console
    + log
    + warn
    + error
    + table
    + time - timeEnd
    + group - groupEnd
    + css
  popup
    + alert
    + confirm
    + prompt
  timer
    + setTimeout - clearTimeout
    + setInterval - clearInterval
*/

// Console
// console.log('Hello', 'Hi', 'Goodbye')
// console.log('This is a log!')
// console.warn('This is a warning!')
// console.error('This is an error!')
// console.table(['Pizza', 'Phở', 'Bánh Cuốn', 'Cafe'])

// Check thời gian chạy 1 đoạn code
// console.time(`PROCESS`)
// var a = 10
// console.timeEnd(`PROCESS`)

// console.group('Product')
// console.log('Previous: ', 5)
// console.log('Actions: ', 'x')
// console.log('Payload: ', 2)
// console.log('Next: ', 10)
// console.groupEnd('Product')

// console.log(
//   '%cStop!',
//   `color: red;font-size: 50px; text-shadow: 1px 1px 0 rgba(0,0,0)`
// )

// console.log('%cRed %cGreen', `color: red`, `color: green`)

// Popup
// alert('This is an alert!')
// var check = confirm('Are you sure you want to do that?')
// console.log('Check:', check)
// var name = prompt("What's your name?")
// console.log(`🚀 | name:`, name) // null || '' || Quyen

// Timer
// var logTimeout = setTimeout(() => {
//   console.log('You lost 3 seconds!')
// }, 3000) // 1s = 1000ms

// setTimeout(() => {
//   clearTimeout(logTimeout)
//   console.log('Clear successfully!')
// }, 1000)

// var loopInterval = setInterval(() => {
//   console.log(Math.random() * 5 + 1)
// }, 1000)

// setTimeout(() => {
//   clearInterval(loopInterval)
//   console.log('Clear successfully!')
// }, 6000)

// 4. Operator in JS
/*
  1. Arithmetic - Toán tử số học
  2. Assignment - Toán tử gán
  3. Comparison - Toán tử so sánh (quan hệ)
  4. Logical - Toán tử logic
*/

// 4.1. Arithmetic - Toán tử số học
/*
  +  --> Plus
  -  --> Minus
  *  --> Multiply
  /  --> Divide
  %  --> Modulo
  ** --> Exponential (Lũy thừa)
  << --> Left shift (Dịch bit trái)
  >> --> Right shift (Dịch bit phải)

  Syntax: <variable_name_1> <operator> <variable_name_2>
*/

// var a = 5
// var b = 2
// var result = a >> b
// 5 (10) = 2^2 + 2^0 = 101 (2)  10100(2) = 20
// 101 >> 2 = 1 (2) = 2^0 = 1 (10)
// console.log(`🚀 | result:`, result)

// 4.2. Assignment - Toán tử gán
/*
  Operator     Example     Other
  =            x = y       _
  +=           x += y      x = x + y
  -=           x -= y      x = x - y
  *=           x *= y      x = x * y
  /=           x /= y      x = x / y
  **=          x **= y     x = x ** y
  <<=          x <<= y     x = x << y
  >>=          x >>= y     x = x >> y
  ++           x++         x = x + 1
  --           x--         x = x - 1
*/
// var a = 10
// a = 20
// a = 30
// console.log(30)

// var a = 10
// var b = 20
// var tmp = a;
// a = b;
// b = tmp;

// console.log('a =', a)
// console.log('b =', b)

// var a = 2
// var b = 10
// a += b

// console.log(a)

// prefix and postfix
// var a = 6
// console.log(a)
// console.log(++a) // calculate => print
// console.log(a++) // print => calculate
// console.log(a)
// console.log('===================')
// console.log(a)
// console.log(--a)
// console.log(a--)
// console.log(a)

// var a = 6
// var result
// result = a++ + ++a // 6++ + 8 = 14
// result = --a + ++a // 5 + 6 = 11
// result = a++ + --a // 6++ + 6 = 12
// result = ++a * 5 - a-- * 5 + --a // 7 * 5 - 7-- * 5 + --6 = 5
// console.log(result)

// todo: Calculate rs
// rs1 = ++a - a++ + 1 - ++a; // 7 - 7++ + 1 - ++8 = -8
// rs2 = --a - a-- - ++a; // 5 - 5-- - ++4 = -5
// rs3 = ++a + a-- * ++a; // 7 + 7-- * ++6 = 56
// rs4 = ++a - a++ + 5; // 7 - 7++ + 5 = 5
// rs5 = --a - a++ + a-- * 2 - ++a; //5 - 5++ + 6-- * 2 - ++5 = 6

// Plus in String
// var firstName = 'Quyen'
// var lastName = 'Dang'
// var fullName = firstName + ' ' + lastName

// console.log(firstName + ' ' + lastName)
// console.log(`🚀 | fullName:`, fullName)

// Ép kiểu ngầm (Implicit type conversion)
// var a = '10' + 5 // 105
// var b = 10 + '5' // 105
// var c = '10' - 5 // 5
// var d = 10 - '5' // 5

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// var a = 1 / 0
// console.log(a) // Infinity

// var b = 'A' * 1
// console.log(b) // NaN = Not A Number

// 4.3. Comparison - Toán tử so sánh (quan hệ)
/*
  Operator           Meaning
  ==                 So sánh bằng (value)
  !=                 So sánh khác (value)
  >                  So sánh lớn hơn (value)
  <                  So sánh nhỏ hơn (value)
  >=                 So sánh lớn hơn hoặc bằng (value)
  <=                 So sánh nhỏ hơn hoặc bằng (value)
  ===                So sánh bằng tuyệt đối (datatype and value)
  !==                So sánh khác tuyệt đối (datatype and value)

  return value: boolean (true/false)
*/
// var isExactly = 10 <= 10
// console.log(isExactly)

// var a = 10
// var b = '10'

// console.log('a == b', a == b)
// console.log('a === b', a === b)

// console.log('a != b', a != b)
// console.log('a !== b', a !== b)

// var a = 'Dang Tran Quyen'
// var b = 'Dang TrAn Quyen'

// console.log(a == b)
// console.log(a === b)
// console.log(a > b) // a > A (97 > 65)

// 4.4. Logical - Toán tử logic
/*
  Not: ! --> !true = false , !false = true
  And: && --> all true => true, 1 false => false
  Or: || --> 1 true => true, all false => false

  Priority: () > not > and > or
  Note: Ngoài 6 giá trị falsy (false) ở bên dưới thì tất cả là truthy (true)
  0             null
  false         NaN
  '' _ "" _ ``  undefined
*/

// Falsy
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
// console.log(Boolean(''))
// console.log(Boolean(undefined))

// Truthy
// console.log(Boolean('A'))
// console.log(Boolean(-5))
// console.log(Boolean([]))
// console.log(Boolean({}))

// var a = 'A' || 'B'
// console.log(a, Boolean(a))

// Note:
// &&: Tìm và trả về Falsy
// ||: Tìm và trả về Truthy
// Nếu k0 tìm thấy thì nó sẽ lấy value còn lại ở bên phải

// var result
// result = 'A' && 'B' && 'C' && 'D' // D true
// result = 'A' && 'B' && undefined && 'D' // undefined false
// result = 'A' || 'B' || 'C' || 'D' // A true
// result = 'A' || undefined || true || NaN // A true

// result = 'A' && 'B' && 'C' && '' // '' false
// result = 'A' && undefined && 'C' && '' // undefined false
// result = 'A' || false || 'C' || undefined  // A true
// result = null || '' || 'C' || undefined // C true

// !'A' = !Truthy = !true = false
// !'' = !Falsy = !false = true
// result = 'A' || (false && 'C') || undefined // A true
// result = ('A' && false) || ('C' && undefined) // undefined false
// result = ((!'A' || false || 'B') && 'C') || '' // C true
// result = ((!'A' || false || 'B') && !'C') || '' // '' false
// result = !('A' && 'B') || (!'' && null) // false false
// result = 'A' && 'B' && !(!'' || null) // false false

// console.log(result, !!result)
// console.log(result, Boolean(result))

// 5. Datatype in JS
/*
  1. Primitive Data - Kiểu dữ liệu đơn giản (nguyên thủy)
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol

  2. Complex Data - Kiểu dữ liệu phức tạp
  - Function (5)
  - Object (Array)

  Syntax: DataType(el)
*/

// 5.1 Number (Math)
// var a = 1
// var b = 0.75
// var c = -5

// console.log(a) // 1
// console.log(typeof a) // number

// console.log(Number('123')) // 123
// console.log(typeof Number('123')) //number

// console.log(+'123') // 123
// console.log(typeof +'123') // number

// console.log(parseInt('123.5')) //123
// console.log(parseFloat('123.5')) //123.5

// 5.2. String
// var str = 'My string'
// var str2 = str + ' js'
// var str3 = 'PHP'
// var str4 = "Let's go"
// var str5 = '1. Nguyen Van A\n2. Tran Van B\n3. Le Van C'
// var str6 = `1. Nguyen Van A
// 2. Tran Van B
// 3. Le Van C` // Template String (Nội suy học ở phần ES6)

// console.log(str)
// console.log(str2)
// console.log(str3)
// console.log(str4)
// console.log(str5)
// console.log(str6)

// console.log(typeof str) // string

// console.log(String(null))

// console.log((123).toString())
// console.log([1, 2, 3].toString())

// console.log(123 + '')
// console.log([1, 2, 3] + '')

// Dùng với Object
// console.log(JSON.stringify({ id: 1, name: 'Quyen' }))

// Note: Khi có một số ký tự đặc biệt trùng với keyword trong lập trình thì thêm dấu "\" đằng trước

// 5.3. Boolean
// is/are/was/were, has/have/had ,can/could
// var isSuccess = false
// var canClick = false
// var hadTransition = false

// console.log(typeof isSuccess) // boolean
// console.log(Boolean(' ')) // true
// console.log(!!'A') // true

// 5.4. Undefined
// var a
// console.log(a)
// console.log(typeof a)

// 5.5. Null
// var NULL = null
// var isNull = null
// var onSubmit = null
// var product = null

// console.log(product) // null
// console.log(typeof product) // object

// console.log(null == undefined) // true
// console.log(null === undefined) // false

// console.log(product === null) // true
// console.log(Object.is(product, null)) //true

// 5.6. Symbol
// var id = Symbol(1)
// var id2 = Symbol(1)
// var id3 = id

// console.log(id)
// console.log(id2)
// console.log(typeof id) // symbol

// console.log(id == id2) // false
// console.log(id === id2) // false
// console.log(id == id3) // true
// console.log(id === id3) // true

// console.log(Symbol(5))

// 5.7. Function (Expression function)
/*
  Syntax:
  var <name> = function(){
    Your code ...
  }
*/

// var myFunction = function () {
//   console.log('function is called')
// }

// console.log(myFunction)
// console.log(typeof myFunction) // function

// () : call operator
// myFunction() // function is called

// 5.8. Object Literal (Object Constructor)
/*
  Syntax:
  var <name> = {
    key1: value1,
    key2: value2,
    ...
  }
*/

// var person = {
//   id: 1,
//   name: 'John',
//   age: 20,
//   address: 'America',
//   myFunction: function () {
//     return this.name
//   },
// }

// console.log(person)
// console.log(typeof person) // object

// var isObject = !Object.is(person, null) && typeof person === 'object'
// console.log(isObject)

// 5.9. Array (is Object)
/*
  Syntax: var <name> = [value1, value2, ...]
*/

// var arr = [1, 2, 3]
// var languages = ['Javascript', 'C', 'Java']
// var mixed = [1, 'Numpy', null, { id: 1, name: 'Magic' }]

// console.log(arr)
// console.log(languages)
// console.table(languages)

// console.log(typeof arr) // object
// console.log(Array.isArray(arr)) // true

// console.log(Array('123'))

// Note: String nó cũng là một character array
// var str = 'This is a string!'
// console.log(Array.from(str)) // character array

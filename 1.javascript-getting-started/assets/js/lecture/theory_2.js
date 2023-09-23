// 6. Branching structure
/*
  1. Terminating operator
  2. if - else if - ... else
  3. switch - case - default - break
  4. try - catch - finally - throw Error
*/

// 6.1. Terminating operator
/*
  Syntax:
  var <name> = <condition> ? <value1> : <value2>
  var <name> = <condition> ? <value1> : <condition2> ? <value2> : <value3> (...)
*/
// var age = 19
// var condition = age >= 18
// var canDrinkWine = condition ? 'Can drink.' : 'Not enough age!'

// console.log(...data:canDrinkWine) 
// var male = 1
// var female = 0
// var data = 1
// var gender = data == male ? true : false

// console.log(gender)

// var SUCCESS = 1;
// var UNSUCCESS = 0;
// var check = Number(+prompt("In put your value"));
// var isSuccess = check === SUCCESS ? true :false

// console.log(isSuccess)


// 6.2. if - else if - ... else

// 6.2.1. Full
// var score = +prompt('Input your score: ')

// if (score >= 9) {
//   console.log('Rank A')
// } else if (score >= 7) {
//   console.log('Rank B')
// } else if (score >= 5) {
//   console.log('Rank C')
// } else {
//   console.log('Rank D')
// }

// Note: Nếu bên trong chỉ có 1 dòng lệnh thì có thể bỏ ngoặc {} đi
// if (score >= 9) console.log('Rank A')
// else if (score >= 7) console.log('Rank B')
// else if (score >= 5) console.log('Rank C')
// else console.log('Rank D')

// 6.2.2. if - else
// var isSuccess = true

// if (isSuccess) {
//   console.log('Successfully!')
// } else {
//   console.log('Failed!!!')
// }

// 6.2.3.if - else if - ... - else if (n)
// var score = -5

// if (score >= 9) {
//   console.log('Rank A')
// } else if (score >= 7) {
//   console.log('Rank B')
// } else if (score >= 5) {
//   console.log('Rank C')
// }

// var data = Number(prompt("Nhap gia tri"));
// var XUAN = 1;
// var HA = 2;
// var THU = 3;
// var DONG = 4;
// if (data === XUAN) {
//   console.log("Xuan")
// } else if (data === HA) {
//   console.log("Ha")
// } else if (data === THU) {
//   console.log("Thu")
// } else {
//   console.log("Dong")
// } 



// 6.2.4. if
// var score = 10
// if (score === 10) {
//   console.log('Can go fishing!')
// }

// console.log('End structure!')

// if(){}
// if(){}
// if(){}

// 6.2.5. Nested
// ax + b = 0;
// var a = 5
// var b = 10

// if (a === 0) {
//   if (b === 0) {
//     // 0x + 0 = 0
//     console.log('PT có vô số nghiệm!')
//   } else {
//     // 0x + 10 = 0
//     console.log('PT vô nghiệm!')
//   }
// } else {
//   // 5x + 10 = 0
//   var x = -b / a
//   console.log('PT có nghiệm duy nhất x =', x)
// }

// 3. switch - case - default - break
// var score = 0
// switch (score) {
//   case 0: {
//     console.log(0)
//     break
//   }
//   case 'A': {
//     console.log('A')
//     break
//   }
//   case [1, 2, 3]: {
//     console.log(score)
//     break
//   }
//   default: {
//     console.log('Invalid value!')
//     break
//   }
// }

// var month = +prompt('Input your month:')
// var month = 135
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12: {
//     console.log('This month has 31 days.')
//     break
//   }
//   case 4:
//   case 6:
//   case 9:
//   case 11: {
//     console.log('This month has 30 days.')
//     break
//   }
//   case 2: {
//     console.log('This month has 28 or 29 days.')
//     break
//   }
//   default: {
//     console.log('This month is invalid!')
//     break
//   }
// }

// 4. try - catch - finally - throw Error
// var isSuccess = true

// try {
//   if (isSuccess) console.log('Successfully!')
//   else throw new Error('Failed!!!')
// } catch (error) {
//   console.error(error)
// }

// try {
//   if (isSuccess) console.log('Successfully!')
//   else throw new Error('Failed!!!')
// } catch (error) {
//   console.error(error)
// } finally {
//   console.log('All done!')
// }

// 7. Loop
/*
  2 loại vòng lặp
  + lặp xác định (for)
  + lặp không xác định (while)

  + for/i
  + for/in
  + for/of
  + while
  + do-while
*/

// 7.1. fori
// for (var i = 1; i <= 5; i++) {
//   console.log(i)
// }

// var i = 1
// for (; i <= 5; i++) {
//   console.log(i)
// }

// var i = 1
// for (; i <= 5; ) {
//   console.log(i)
//   i++
// }

// var i = 1
// for (;;) {
//   if (i > 5) break
//   console.log(i)
//   i++
// }

// break and continue
// for (var i = 1; i <= 10; i++) {
//   // if (i > 5) break
//   if (i > 2 && i < 8) continue
//   console.log(i)
// }

// Nested
// var str = ''
// for (var i = 1; i <= 4; i++) {
//   for (var j = 1; j <= 4; j++) {
//     str += '*' + ' '
//   }
//   str += '\n'
// }
// console.log(str)

//  7.2. for/in (Object/ Array)
// var arr = ['HTML', 'CSS', 'JS', 'PHP']
// var obj = {
//   id: 1,
//   name: 'Tai',
//   age: 22,
// }

// for (var idx in arr) {
//   var value = arr[idx]
//   console.log(idx, value)
// }

// for (var key in obj) {
//   var value = obj[key]
//   console.log(key, value)
// }

//  7.3. for/of (Array / String)
// var arr = ['HTML', 'CSS', 'JS', 'PHP']
// var obj = {
//   id: 1,
//   name: 'Tai',
//   age: 22,
// }

// for (var val of arr) {
//   console.log(val)
// }

// [1,'Tai',22]
// for (var val of Object.values(obj)) {
//   console.log(val)
// }

// ['J','a','v',...]
// for (var c of 'Javascript') {
//   console.log(c)
// }

// 7.4. while
// var i = 0
// var sum = 0

// while (i <= 10) {
//   if (i % 2 === 0) {
//     sum += i
//     console.log(sum)
//   }
//   i++
// }

// console.log('Sum:', sum)

// 7.5. do-while
// var i = 0
// var check = false

// do {
//   var input = prompt('Input your password:')
//   if (input === '123') {
//     console.log('123')
//     check = true
//   }
// } while (!check)

// console.log('**END LOOP**')

// 8. String (DEEP)
// var str = 'Hello, world'
// var otherStr = new String('Goodbye!')

// console.log(str)
// console.log(otherStr)

// console.log(typeof str) // string
// console.log(typeof otherStr) // object

// console.log(otherStr instanceof String) // true

// console.log(String.prototype)

// Template String (ES6)
// var firstName = 'Quyen'
// var lastName = 'Dang'

// var str1 = firstName + ' ' + lastName
// var str2 = `${firstName} ${lastName}` // interpolate

// console.log(str1)
// console.log(str2)

// String method
// var str = 'Javascript from JS zero to JS hero!'
// console.log(String.prototype) // Show all string methods

// 1. length
// console.log('Javascript'.length) // 10
// console.log(str.length) // 35

// 2. indexOf
// console.log(str.indexOf('JS')) // 16
// console.log(str.indexOf('JS', 17)) // 27
// console.log(str.lastIndexOf('JS')) //27
// console.log(str.indexOf('JSX')) // -1

// 3. search
// console.log(str.search('JS')) // 16
// console.log(str.search(/[*ava]/)) // 1
// console.log(str.search('JSX')) // -1

// 4. slice/ substring (start <= x < end)
// console.log(str.slice()) // clone string
// console.log(str.slice(0)) // clone string
// console.log(str.slice(16)) // JS zero to JS hero!
// console.log(str.slice(16, 18)) // JS
// console.log(str.slice(-5, -1)) // hero

// console.log(str.substring(16, 18))

// 5. replace/ replaceAll
// console.log(str.replace('JS', 'JQK'))
// console.log(str.replaceAll('JS', 'JQK'))
// console.log(str.replace(/JS/g, 'JQK'))

// 6. toUpperCase/ toLowerCase
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// 7. trim
// var first = '    first    '
// console.log(first)
// console.log(first.trim())
// console.log(first.trimStart())
// console.log(first.trimEnd())

// 8. split
// console.log(str)
// console.log(str.split()) // ['<str>']
// console.log(str.split('')) // character array
// console.log(str.split(' '))
// console.log(str.split(' ', 3))
// console.log(str.split('JS', 3))

// 9. charAt
// console.log(str.charAt(0))
// console.log(str.charAt(1))
// console.log(str[0])
// console.log(str[1])

// 10. substr
// console.log(str.substr(0, 10))

// 11. includes
// console.log(str.includes('JS')) // true
// console.log(str.includes('JSX')) // false
// console.log(str.includes('JS', 20)) // true

// 12. match/ matchAll
// console.log(str.match('JS')) // info
// console.log(str.match('JSX')) // null

// var matcher = str.matchAll('JS') // LinkedList
// console.log(matcher.next()) // done: false, value: info
// console.log(matcher.next()) // done: false, value: info
// console.log(matcher.next()) // done: true, value: undefined

// var matcher = str.match(/JS/g) // Array
// console.log(matcher) // [JS, JS]

// Number (DEEP)
// var age = 10
// var PI = 3.14
// var negative = -3
// var ini = Infinity
// var otherNumber = new Number(123)

// console.log(age)
// console.log(otherNumber)

// console.log(typeof age) //number
// console.log(typeof otherNumber) // object

// console.log(otherNumber instanceof Number) // true

// var a = 10 / 'A'
// var b = -5 / 0
// var c = 5 + null

// console.log(a) // NaN
// console.log(isNaN(a)) // true
// console.log(b) // -Infinity
// console.log(5)

// var a = 5.23456
// var b = 1e23
// console.log(Number.prototype)

// console.log(b.toExponential(3)) // 999^1000 = 1e+20
// console.log(a.toFixed(2)) // 5.23
// console.log(a.toPrecision(2)) // 5.2
// console.log(a.toString())
// console.log(a + '')
// console.log(a.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }))

// Math Object
// console.log(Math)

// console.log(Math.PI)
// console.log(Math.E)

// console.log(Math.abs(-5))
// console.log(Math.sqrt(9))
// console.log(Math.cbrt(27))
// console.log(16 ** (1 / 4))
// console.log(Math.fround(1.9))

// console.log(Math.pow(2, 3))
// console.log(2 ** 3)

// console.log(Math.floor(1.9))
// console.log(Math.ceil(1.1))
// console.log(Math.round(1.5))
// console.log(Math.trunc(1.53))

// console.log(Math.max(3, 5, 7))
// console.log(Math.min(3, 5, 7))

// console.log(Math.random()) // 0 -> 1

// 10. Array (DEEP)
// 10.1. Overview
// console.time(`Direct`)
// var arr = ['JS', 'C++', 'PHP', 'Ruby', 'C#']
// console.timeEnd(`Direct`)

// console.time(`Object`)
// var otherArr = new Array('A', 'B', 'C')
// console.timeEnd(`Object`)

// console.log(arr)
// console.log(otherArr)

// console.log(typeof arr) // object
// console.log(typeof otherArr) // object

// Access to array
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// Check array
// console.log(Array.isArray(arr)) // true
// console.log(Array.isArray(otherArr)) // true

// console.log(arr instanceof Array) // true
// console.log(otherArr instanceof Array) // true

// 10.2. Array methods
// console.log(Array.prototype)
// console.log(arr.__proto__)
// console.log(Array.prototype === arr.__proto__)

// 1. length - get length of array
// console.log(arr.length)
// console.log(arr[arr.length - 1])

// 2. toString - convert array to string
// console.log(arr.toString())

// 3. join - convert array to string with separator
// console.log(arr.join(''))
// console.log(arr.join(' '))
// console.log(arr.join(', '))

// 4. pop - push: Stack (FILO) remove/ add in last
// console.log(arr)
// var popValue = arr.pop()
// console.log('popValue:', popValue)
// console.log(arr)
// arr.push('Java', 'Python')
// console.log(arr)

// 5. shift - unshift | remove/ add in head
// console.log(arr)
// var shiftValue = arr.shift()
// console.log('shiftValue:', shiftValue)
// console.log(arr)
// arr.unshift('Java', 'Python')
// console.log(arr)

// 6. splice - update array
// Delete
// console.log(arr)
// var deletedValues = arr.splice(1, 2)
// console.log(`🚀 | deletedValues:`, deletedValues)
// console.log(arr)

// Insert
// console.log(arr)
// var deletedValues = arr.splice(1, 0, 'Java', 'Python')
// console.log(`🚀 | deletedValues:`, deletedValues)
// console.log(arr)

// Replace
// console.log(arr)
// var deletedValues = arr.splice(1, 2, 'Java', 'Python')
// console.log(`🚀 | deletedValues:`, deletedValues)
// console.log(arr)

// 7. slice - get sub array from root array (start <= x < end)
// console.log(arr.slice()) // clone array
// console.log(arr.slice(0)) // clone array
// console.log(arr.slice(1, 4)) // from start to end

// 8. concat - merge two arrays
// var arr2 = ['Native', 'Swift']
// console.log(arr.concat(arr2))

// 9. reverse - reverse array
// console.log(arr)
// console.log(arr.reverse())

// Assign by value (Tham trị) and assign by reference (Tham chiếu)
// Assign by value (Tham trị) - None object type
// var a = 10
// var b = a // copy value
// b += a

// console.log(a)
// console.log(b)

// Assign by reference (Tham chiếu) - Object type
// var a = [1, 2, 3]
// // var b = a // b pointer a
// var b = a.slice() // clone array
// b.push(5)

// console.log(a)
// console.log(b)

// var a = {
//   id: 1,
//   name: 'Javascript',
// }

// var b = a
// b.name = 'PHP'

// console.log(a)
// console.log(b)

// 11. Function
/*
  1. Định nghĩa
  - Hàm là một khối mã
  - Thực hiện một tính năng cụ thể

  2. Loại hàm
  - Built-in function
  - User defined function

  3. Tính chất
  - Tính tái sử dụng code
  - Không thực thi khi định nghĩa
  - Sẽ thực thi khi được gọi
  - Có thể nhận tham số
  - Có thẻ trả về giá trị
*/

// 11.1. Tạo hàm đầu tiên
// Đặt tên hàm: a-z A-Z 0-9 _ $ (số k0 được đưa lên đầu)
// function showLog(msg) {
//   console.log(msg)

//   return 'DONE'
// }

// call function with () operator
// showLog() // undefined
// showLog('Hello World!')
// showLog('Goodbye!')

// var returnValue = showLog('Hello World!')
// console.log(returnValue)

// Có thể trả về giá trị
// function sum(a, b) {
//   return a + b
//   // console.log('Total:') // Can't run after return
// }

// var result = sum(10, 15)
// console.log(result)

// 11.2. Tham số của hàm
/*
  1. Tham số là gì?
  + Định nghĩa
  + DataType (any)
  + Tính scope
  + Có thể nhận được nhiều tham số k0

  2. Đối số là gì?
  + Truyền 1 đối số (SL đối số === SL tham số | ><)
  + Truyền nhiều đối số


  3. Argument Object
*/


// function double(a) {
//   var b=a**2;
//   return b
// }

// var x = double(2);
// console.log(x)


// function root (a,b) {
//   var x = a**(1/b)
//   return x
// }

// var result = root(9,2)
// console.log(result)

// function writeLog(msg, type) {
//   if (!type) type = 'log'
//   console[type](`${type}:`, msg)
// }
// writeLog()
// writeLog('Hello')
// writeLog('Hello', 'warn')
// writeLog('Hello', 'warn', 5)

// console.log(1, 2, 3, 4, 5, 6)

// Argument Object
// function useArgument(a, b) {
//   console.log(arguments)
//   console.log(typeof arguments)
//   console.log(arguments[0])
//   console.log(a)
//   console.log(arguments[7])
// }

// useArgument(1, 2, 3, 4, 5, 6, 7, 8, 9)

// function log() {
//   for (var key in arguments) {
//     console.log(arguments[key])
//   }
// }

// log(1, 2, 3, 4, 5, 6, 7, 8, 9)

// 11.3. Một số lưu ý
/*
  1. Khi hàm đặt trùng tên?
  2. Khi khai báo biến trong hàm?
  3. Định nghĩa hàm trong hàm?
*/
// 1. Khi hàm đặt trùng tên? (Overwriting)
// function log() {
//   console.log('Hello')
// }

// function log() {
//   console.log('Goodbye')
// }

// log()

// 2. Khi khai báo biến trong hàm?
// function log(message) {
//   var msg = 'Hello'
//   console.log(msg + ' ' + message)
// }

// log('Nam')
// console.log(msg) // Error

// 3. Định nghĩa hàm trong hàm?
// function log(msg) {
//   function log2(msg) {
//     console.log(2, msg)
//   }

//   console.log(1, msg)
//   log2('Goodbye')
// }

// log('Hello')
// log2('Goode night!') // Error

// 11.4 Các loại hàm
/*
  1. Return value
  - return
  - void

  2. Syntax
  - Declaration function
  - Expression function
  - Arrow function
  - Star function (function*)
  - Anonymous function

  3. Compare
  4. IIFE
*/
//  1. Return value
// function showLog(message) {
//   console.log(message)
//   // return undefined
// }

// var returnValue = showLog('Hello')
// console.log(returnValue)

// function triple(a) {
//   return a ** 3
// }

// 2. Syntax
// Declaration function
// function showLog() {
//   console.log('Declaration function')
//   console.log(this)
// }

// showLog()

// Expression function
// var showLog = function () {
//   console.log('Expression function')
//   console.log(this)
// }

// var showLog = function log() {
//   console.log('Expression function')
// }

// showLog()

//  Arrow function
// var showLog = () => {
//   console.log('Arrow function')
// }

// If have 1 line code
// var showLog = () => console.log('Arrow function')

// var sum = (a, b) => {
//   return a + b
// }

// If have 1 line return
// var sum = (a, b) => a + b

// showLog()

// Star function (function*)
// function* starFunction() {}

// var starFunction2 = function* () {}

// function* starFunction(i) {
//   console.log('JOB 1')
//   yield i - 1

//   console.log('JOB 2')
//   yield i

//   console.log('JOB 3')
//   yield i + 1

//   console.log('Final JOB')
//   return [i - 1, i, i + 1]
// }

// var generator = starFunction(10) // LinkedList

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// Anonymous function
// function (){
// }

// () => {
// }

// setTimeout(() => {
//   console.log('OK')
// }, 1000)

// setTimeout(function () {
//   console.log('DONE')
// }, 1000)

// function test(callback) {
//   for (var i = 0; i < 10; i++) {
//     callback()
//   }
// }

// test(() => {
//   console.log('Hello World!')
// })

// 3. Compare
/*
  - Đều có tính tái sử dụng trừ anonymous function (trừ TH đặt tên cho nó rồi)
  - this đều trỏ tới window
  - Có thể trả về giá trị trừ star function vì nó trả về được nhiều giá trị.
  - declaration function và star function đều có tính hoisting
*/

// 4. IIFE - auto run function (library)
// ;((a, b) => console.log(a + b))(10, 15)

// ;(function pow(a, b) {
//   console.log(a ** b)
// })(3, 3)

// pow(3, 5) // Error

// ;(function div(a, b) {
//   console.log(a / b)
// })(5, 2)

//? 0. What is ES6 ?
//? 1. let,const
//? 2. Template Literals
//? 3. Strict mode
//? 4. Arrow function
//? 5. Classes
//? 6. Enhanced object literals
//? 7. Default parameter values
//? 8. Destructuring
//? 9. Rest parameter (...Rest)
//? 10. Spread Operator (...)
//? 11. Tagged template literals
//? 12. Modules Pattern (Design Pattern)
//? 13. Optional chaining (?.)
//? 14. Senior Comment @use JSDoc
//? 15. Rotate Operator (??)
// ==============================================================
//? 0. What is ES6 ?
/*
  ES6 (ECMAScript 6) ra đời vào năm 2015. Nó là một quy chuẩn được ra đời bởi một tổ chức gọi là Ecma International và tiêu chuẩn này sinh ra đêr tạo ra các quy chuẩn cho javascript

  Note: Có một số trình duyệt (browser) k0 support ES6
  Solution: Babel hỗ trỡ compile ES6 về ES5 để giúp hầu hết các browser có thể hiểu được
*/

//? 1. let,const
//? Phân biệt var, let, const
// Scope (Phạm vi)
// Hoisting (Kéo lên đầu)
// Assignment (Gán lại giá trị)

//? Scope
//? Code block: {}, if else, loop, ...
{
  // var a = 10
  // let b = 20
  // const c = 30

  // console.log(a)
  // console.log(b)
  // console.log(c)

  {
    // var a = 100
    // let b = 200
    // const c = 300
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(a)
    // console.log(b)
    // console.log(c)
  }
}

//? Hoisting
// console.log(a)
// console.log(b) // error
// console.log(c) // error

// console.log(a) // undefined
// console.log(window.a)

// console.log(b) // error
// console.log(c) // error

// var a = 10
// let b = 20
// const c = 30

//? Assignment
// var a = 10
// a = 100
// console.log(a)

// let b = 20
// b = 200
// console.log(b)

// const c = 30
// c = 300
// console.log(c)

// const arr = ['pudding', 'caramen']
// arr.push('ice-cream')
// console.log(arr)

// const obj = {
//   name: 'Javascript',
// }

// obj = {} // => Error
// obj.name = 'PHP'
// console.log(obj)

//? 2. Template Literals
// const str = 'Hello'
// const str2 = 'World'

// const rangeString = `"${str} ${str2}"`

// console.log(`🚀 | rangeString`, rangeString)

//? 3. Strict mode
// ;('use strict')

// const student = {
//   fullName: 'Nguyen Van A',
// }

// student.fullName = 'Tran Van B'

// console.log(student.fullName)
// const student2 = Object.freeze({
//   fullName: 'Nguyen Van C',
// })

// student2.fullName = 'Tran Van D'

// const person = {}
// Object.defineProperties(person, {
//   fullName: {
//     value: 'Tran Van A',
//     writable: false,
//   },
// })

//? 4. Arrow function
// const arrowFunction = () => {
//   // code here ...
//   console.log('Hello world')
//   return 'OK'
// }

// "=>" <=> "return"
// const sum = (a, b) => a + b
// const log = (a, b) => console.log(a + b)

// console.log(sum(5, 15))

// Nhớ thêm ngoặc tròn cho object
// const returnObj = () => {
//   return {
//     id: 1,
//     name: 'Quyen Dang',
//     title: 'TL',
//   }
// }

// const returnObj = () => ({
//   id: 1,
//   name: 'Quyen Dang',
//   title: 'TL',
// })

// console.log(returnObj())

//? 5. Classes (Weak)
//? Encapsulation (Đóng gói)
//? Inheritance (Kế thừa)
//? Polymorphism (Đa hình)
//? Abstract (Trừu tượng)
// class Person {
//   #id
//   constructor(id, firstName, lastName, address, salary) {
//     this.#id = id
//     this._firstName = firstName
//     this._lastName = lastName
//     this._address = address
//     this._salary = salary
//   }

//   // getter/ setter
//   getFirstName() {
//     return this._firstName
//   }

//   setFirstName(firstName) {
//     this._firstName = firstName
//   }

//   getFullName() {
//     return `${this._firstName} ${this._lastName}`
//   }
// }

// class Animal {}

// class Customer extends Person {
//   constructor(id, firstName, lastName, address, salary, isVIP, pet) {
//     super(id, firstName, lastName, address, salary)
//     this._isVIP = isVIP
//     this._pet = pet
//   }

//   doSomething() {
//     console.log('Customer do this')
//   }
// }

// class Employee extends Person {
//   constructor(id, firstName, lastName, address, salary, position) {
//     super(id, firstName, lastName, address, salary)
//     this._position = position
//   }

//   doSomething() {
//     console.log('Employee do this')
//   }
// }

// const customer = new Customer(1, 'Nam', 'Nguyen', 'Ha Noi', 3000, true)
// const employee = new Employee(1, 'Luan', 'Trieu', 'Ha Noi', 3000, 'clerk')

// console.log(customer)
// console.log(customer.getFullName())
// console.log(customer.doSomething())
// console.log(employee)
// console.log(customer)
// console.log(employee.getFullName())
// console.log(employee.doSomething())

// IS-A
// HAS-A

// const person = new Person(1, 'Nam', 'Nguyen', 'Ha Noi', 3000)
// console.log(person._firstName)
// console.log(person.getFirstName())

//? 6. Enhanced object literals
// const javascriptCourse = {
//   name: 'Javascript',
//   price: 3000,
//   getName() {
//     return this.name // most use
//   },
//   setName: function (name) {
//     this.name = name
//   },
//   get getPrice() {
//     return this.price
//   },
//   set setPrice(price) {
//     this.price = price
//   },
// }

// javascriptCourse.name = 'Hoang'
// console.log(javascriptCourse.name)
// javascriptCourse.setName('Hung')
// console.log(javascriptCourse.getName())
// javascriptCourse.setPrice = 5000
// console.log(javascriptCourse.getPrice)

// const name = 'javascript'
// const price = 3000

// const newField = 'next-book'
// const fieldQuantity = 'quantity'

// const quantity = 30

// const course = {
//   name, // key-value
//   price,
//   [newField]: 'typescript', // only key
//   [fieldQuantity]: quantity, // key and value
//   getName() {
//     return this.name
//   },
// }

// console.log(course)

//? 7. Default parameter values
// function logger(msg) {
//   if (msg === undefined) {
//     msg = 'Default value'
//   }
//   console.log(msg)
// }

// logger('Hello')

// function logger(msg = 'Default value', type = 'log') {
//   console[type](msg)
// }

// logger('New value', 'warn')

//? 8. Destructuring => Phân rã (Thường sử dụng với Object và Array)
//? TH1: Array
// const arr = ['Javascript', 'PHP', 'Ruby', 'Java']

// Normal
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// console.log(a, b, c)

// Use Destructuring
// const [a, b, c] = arr
// console.log(a, b, c)

// const [a, _, c] = arr
// console.log(a, c)

// const [_, b, c] = arr
// console.log(b, c)

// const [a, b] = arr
// console.log(a, b)

// const [_, __, _3, d] = arr
// console.log(d)

//? TH2: Object
// const course = {
//   name: 'javascript',
//   price: 3000,
//   image: 'image-address',
//   book: {
//     id: 1,
//     name: 'Lord Founder',
//   },
//   tags: ['nodejs', 'npm', 'dom'],
// }

// const {
//   name: courseName, // rename (key: newName)
//   image,
//   price,
//   quantity = 0, // default value (key = default)
//   book: { name: bookName }, // deep destructuring
//   tags: [_, __, lastTag],
// } = course

// console.log(courseName) // rename name => courseName
// console.log(image)
// console.log(price)
// console.log(quantity) // k0 co trong Object thi undefined
// console.log(bookName)
// console.log(lastTag)

// const { book } = course
// const { name } = book

// console.log(name)

// const course = {
//   name: 'javascript',
//   price: 3000,
//   image: 'image-address',
//   book: {
//     id: 1,
//     name: 'Lord Founder',
//   },
//   tags: ['nodejs', 'npm', 'dom'],
// }

// const newCourse = Object.assign({}, course);

// console.log(newCourse);

// newCourse.id = 1;

// console.log(newCourse.id);



// newCourse['id'] = 5;

// console.log(newCourse.id);

// delete newCourse.id;

// console.log(newCourse);

// const rank = {
//   id : 10,
//   name: "A",
//   level: 3,
//   score: 1000
// }

// newCourse['rank'] = rank;
// newCourse.rank = rank;

// console.log(newCourse);

// newCourse.rank.name = "rankName";

// console.log(newCourse);

// newCourse.rank.score = 2000;

// console.log(newCourse);

// console.log(newCourse.tags[1]);

// console.log(newCourse.tags[length -(length-1)]);



//? 9. Rest parameter (...rest)
//? destructuring or param function

//? TH1: Array
// const arr = ['Javascript', 'PHP', 'Ruby']
// const [H, ...rest] = arr

// console.log(H)
// console.log(rest)

//? TH2: Object
// const course = {
//   name: 'javascript',
//   price: 1000,
//   image: 'image-address',
// }

// const { name, ...newObject } = course

// console.log(name)
// console.log(newObject)
// console.log(course)

//? Rest trong tham số của hàm
// function logger(...params) {
//   console.log(params)
//   console.log(arguments)
// }

// logger(1, 2, 3, 4, 5, 6, 7, 8, 9)

//? Destructuring + Rest parameter
// const logger = (obj) => {
//   console.log(obj.name)
//   console.log(obj.price)
// }

// const logger = ({ name, price, ...rest }) => {
//   console.log(name)
//   console.log(price)
//   console.log(rest)
// }

// logger({
//   name: 'Javascript',
//   price: 1000,
//   image: 'image-address',
// })

//? TH Array
// const logger = ([a, b, ...rest]) => {
//   console.log(a)
//   console.log(b)
//   console.log(rest)
// }

// logger([2, 6, 3, 4, 4])

//? 10. Spread Operator (...)
// const arr = ['Javascript', 'PHP', 'Ruby']
// const arrClone = arr.slice()
// const arrClone2 = [...arr]

// console.log(arrClone)
// console.log(arrClone2)

//? TH Array
// const arr1 = ['Javascript', 'Ruby', 'PHP']
// const arr2 = ['ReactJS', 'Dart']
// const arr3 = [...arr1, ...arr2]
// noi arr: concat

// console.log(arr3)

//? TH Object
// const obj1 = {
//   id: 1,
//   name: 'Javascript',
// }

// const obj2 = {
//   price: 1000,
//   description: 'This is a sample description!',
//   quantity: 10,
// }

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

// gop obj: assign

// const defaultConfig = {
//   api: 'https://qtechfun.com',
//   apiVersion: 'v1',
//   accessKey: 'adsf23541Zasf',
//   // ...
// }

// const exerciseConfig = {
//   ...defaultConfig,
//   api: 'https://qtechfun.com/homework',
//   apiVersion: 'v2',
// }

// console.log(exerciseConfig)

// const arr = ['Javascript', 'PHP', 'Ruby', 'ReactJS']

// rest
// const logger = (...params) => {
//   for (let i = 0; i < params.length; i++) {
//     console.log(params[i])
//   }
// }

// logger(...arr) // spread

//? 11. Tagged template literals
// Tham số đầu tiên là mảng các chuỗi != nội suy
// Từ tham số thứ 2 trở đi là các tham số tương ứng với từng nội suy
// const tags = (params, ...args) => {
//   console.log(params)
//   console.log(args)
// }

// tags`I learn ${'English'} from ${'My Office'} then I can ${'promote'}.`

// const hightlight = ([firstParam, ...params], ...args) => {
//   return args
//     .reduce(
//       (acc, curr) => [
//         ...acc,
//         /* html */ `<span style="background-color: yellow;">${curr}</span>`,
//         params.shift(),
//       ],
//       [firstParam]
//     )
//     .join('')
// }

// const html = hightlight`I learn ${'English'} from ${'My Office'} then I can ${'promote'}.`

// document.getElementById('app').innerHTML = /* html */ `<h3>${html}</h3>`


// Tạo ra một mảng fruits [4] lưu trong localStorage
// const fruit = ["apple", "banana", "peach", "lemon"];
// function save(fruit){
//   localStorage.setItem("fruit", JSON.stringify(fruit))
// }

// function get(){
//   return JSON.parse(localStorage.getItem("fruit"));
// }
// save(fruit);

// // // + Thêm 1 quả 
// get();
// console.log(fruit);
// fruit.push("lime");
// console.log(fruit);
// save(fruit);

// + Xóa 1 quả bất kỳ
// get();
// const fruit2 = fruit.slice();
// fruit2.splice(2,1)
// console.log(fruit2)
// // + Thay thế 1 quả bất kỳ
// const fruit3 = fruit.slice();
// fruit3[1] = "grape";
// console.log(fruit3);
// // + Tìm quả ở vị trí đầu và cuổi
// console.log(fruit[0]);
// const x = fruit.length;
// console.log(fruit[x - 1]);
// // + Tìm quả ở vị trí giữa
// console.log(fruit[(x - (x % 2))/2]);
// // + Tìm các loại quả chứa chữ "a"
// var newFruit = [];
// for (var i in fruit) {
//   var index = fruit[i].indexOf('a');
//   if (index >-1){
//     newFruit.push(fruit[i]);
//   }
// }
// console.log(newFruit);
// // + Kiểm tra xem trong mảng có Apple k0
// function isApple (x) {
//   var x = fruit.indexOf('apple');
//   if (x >-1)
//   return true;
//   else
//   return false;
// }

// console.log(isApple(fruit));

// // + Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
// var secondFruit = ["mango", "orange"];
// var finalFruit = fruit.concat(secondFruit);
// console.log(finalFruit);
// // + Sắp xếp theo A-Z và Z-A (hof: soft)
// var finalFruit2 = fruit.sort();
// console.log(finalFruit2);

// fruit.sort((a,b) => (a>b ? -1 : 1))
// console.log(fruit);














//? 12. Modules Pattern (Design Pattern)
// Note: 1 file => 1 export default (main)
//              => multiple name exports (branch)

// import logger from './modules/logger.js'
// import { TYPE_ERROR, TYPE_WARN } from './constants/constants.js'
// import * as constants from './constants/constants.js'

// logger('Hello', 'warn')
// logger('Hello', TYPE_ERROR)
// logger('Hello', constants.TYPE_WARN)

// require <=> import | module.exports <=> export (ES5 vs ES6)

// import showAlert from './modules/index.js'

// showAlert('Say hello', 3000)

// Singleton Pattern
// Provider Pattern
// Observer Pattern
// Factory Pattern
// Proxy Pattern (less)

//? 13. Optional chaining (?.)
// const obj = {
//   name: 'Alice',
//   cat: {
//     name: 'Tom',
//   },
// }

// if (obj.cat) console.log(obj.cat.name)
// if (obj.hasOwnProperty('cat')) console.log(obj.cat.name)

// const obj = {
//   name: 'Alice',
  // cat: {
  //   name: 'Tom',
  //   cat2: {
  //     name: 'Tom 2',
  //     cat3: {
  //       name: 'Tom 3',
  //     },
  //   },
  // },
// }

// if (obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3) console.log(obj.cat.cat2.cat3.name)
// if (obj?.cat?.cat2?.cat3?.name) console.log(obj.cat.cat2.cat3.name)

// const obj3 = {
//   getName(value) {
//     console.log(value)
//   },
// }

// obj3.getName?.(123)

//? 14. Senior Comment @use JSDoc

// /**
//  *
//  * Print name and age
//  *
//  * @param {string} name - The name you want to show
//  * @param {number} age - The age you want to show
//  *
//  * @return {object} {name, age}
//  * @author Quyen Dang <quyendang@gmail.com>
//  * @created 28/10/2022
//  */
// const sayHello = (name, age) => {
//   console.log(`Hello ${name}, ${age}`)
//   return { name, age }
// }

// sayHello('John', 33)

//? 15. Rotate Operator (??)
// Chỉ k0 lấy null và undefined
// console.log(null ?? 1)
// console.log(null || 2)
// console.log(undefined ?? 3)
// console.log(undefined || 4)
// console.log(false ?? 5)
// console.log(false || 6)
// const dataFromBE = data || {};

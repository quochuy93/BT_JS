// 12. Object Literal (Deep)
/*
  2.1. Overview ( 3W1H)
  + What
  + Why
  + When
  + How
  key: value
*/

/*
  Methods => function
  Property => other

  Syntax:
  var <name> = {
    key1: value1,
    key2: value2,
    ...
  }
 */

// console.log(window)
// console.log(this)

/* var myInfo = {
  id: 1,
  name: 'Quyen Dang',
  age: 22,
  address: 'Ha Noi, VN',
  'car-count': 10,
  tags: ['Front-end', 'Back-end', 'Mobile'],
  getName: function () {
    return this.name // myInfo.name
  },
  getAge: function () {
    return this.age // myInfo.age
  },
  getThisArrow: () => {
    return this // window
  },
  setName: function (name) {
    this.name = name
  },
  book: {
    id: 1,
    name: 'Lord Javascript',
    quantity: 50,
    getName: function () {
      return this.name
    },
  },
} */

// console.log(myInfo) // show info
// console.log(myInfo.name) // access property on object
// console.log(myInfo['car-count']) // access property on object

// console.log(myInfo.book.name)
// console.log(myInfo['book']['quantity'])
// console.log(myInfo.book['quantity'])
// console.log(myInfo['book'].quantity)

// var key = 'book'
// console.log(myInfo[key]) // unknown key

// console.log(myInfo.getName) // access method
// console.log(myInfo.getName()) // access method and call
// console.log(myInfo.getThisArrow()) // window
// console.log(myInfo.book.getName())

// var key = 'getName'
// console.log(myInfo.book[key]())

// Add new key-value to object
// Case 1:
// myInfo.pet = 'Milk'
// myInfo['canvas-design-level'] = 3
// myInfo.product = {
//   id: 1,
//   list: ['petcare', 'e-commerce', 'booking', 'live'],
// }


// var myInfo = {
//   id: 1,
//   name: Huy,
//   age: 27,
//   favorites: ['soccer', 'JavaScript','HTML'],
//   isDeveloper: true,
//   job: {
//     id: 101,
//     name: Hung,
//     salary: 1000,
//     rate: 1.5
//   },
//   getName: function() {
//     return this.name
//   },
//   setName: function(new_name) {
//     this.name = new_name
//   },
//   getFavorite: function() {
//     return this.favorites
//   },
//   setFavorite: function(new_favorite) {
//     this.favorites.push(new_favorite)
//   },
//   showInfor: function () {
//     console.log(this)
//   },
//   getYear: function () {
//     return 2023 - this.age
//   },

// }

// var employee = Object.create(myInfo);
// employee.rank = 1;
// employee.getRank = function(){
//   return employee.rank
// };
// employee.setRank = function(new_rank) {
//   employee.rank = new_rank
// };

// var listKey = Object.keys(myInfo);
// console.log(listKey);

// var listKey2 = Object.getOwnPropertyNames(myInfo);
// console.log(listKey2);

// var listValue = Object.values(myInfo);
// console.log(listValue);

// var listKeyValue = Object.entries(myInfo);
// console.log(listKeyValue);

// var w = myInfo.hasOwnProperty('job')
// var hasJobKey = 'job' in myInfo;
// console.log(hasJobKey)

// var new_person = Object.assign({},myInfo);
// new_person.name = 'new_Hung';
// new_person.age = 12;









// Case 2: Object.defineProperty
// Object.defineProperty(myInfo, 'product', {
//   value: {
//     id: 1,
//     list: ['petcare', 'e-commerce', 'booking', 'live'],
//   },
//   writable: true, // default: false
// })

// myInfo.product = null

// Tạo key bằng cách khai báo
// var ID_KEY = 'id'
// var ID_VALUE = 'bk01'

// var myBook = {
//   // [ID_KEY]: 'bk01',
//   // id: ID_VALUE,
//   [ID_KEY]: ID_VALUE,
//   name: 'BOM',
//   'sale-force': 10,
//   author: {
//     id: 1,
//     name: 'Quyen Dang',
//     address: {
//       country: 'Viet Nam',
//       street: 'Hung Vuong',
//     },
//   },
// }

// console.log(myBook)

// Update key-value
// myBook.name = 'DOM'
// myBook['sale-force'] = 20
// myBook.author.address.country = 'France'
// myBook['author']['address']['street'] = 'Paris'
// myBook.author = null

// Delete key-value
// delete myBook // not executed
// delete myBook.name
// delete myBook['sale-force']
// delete myBook.author.address.street

// console.log(myBook)

// Array is Object
// var arr = [1, 2, 3, 4]
// delete arr // not executed
// delete arr[0] //delete index-value with index 0
// arr[0] = 100 // add new index-value 0: 100

// console.log(arr)

// "in" keyword
// var myInfo = {
//   id: 1,
//   name: 'Quyen Dang',
//   age: 22,
//   address: 'Ha Noi, VN',
// }

// var isInMyInfo = 'address' in myInfo
// console.log(isInMyInfo) // true
// console.log('job' in myInfo) // false

// 2.2. Object method
// console.log(Object.prototype) // can't see method
// console.log(Object.prototype.constructor) // now you can see all method

// 2.2.1 - Object.defineProperties() - defined properties with config like writable
// var object1 = {}

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false,
// })

// object1.property1 = 77
// console.log(object1.property1)

// 2.2.2 - Object.keys() - create array key
// var object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// }

// console.log(Object.keys(object1))

// 2.2.3 - Object.values() - create array value
// var object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// }

// console.log(Object.values(object1))

// 2.2.4 - Object.entries() - create array like [[key1,value1],[key2,value2],...]
// var object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// }

// console.log(Object.entries(object1))

// 2.2.5 - Object.hasOwnProperty() - check exist key in object
// var object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// }

// console.log(object1.hasOwnProperty('a')) //true
// console.log(object1.hasOwnProperty('name')) //false

// 2.2.6 - Object.getOwnPropertyNames() like Object.keys
// var object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// }

// console.log(Object.getOwnPropertyNames(object1))

// 2.2.7 - Object.create() - create or extend object
// var person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
//   },
// }

// var me = Object.create(person)

// me.name = 'Matthew'
// me.isHuman = true

// console.log(person)
// console.log(me)

// me.printIntroduction()

// 2.2.8. Object.assign() - merge two objects and clone object
// var target = { a: 1, b: 2 }
// var source = { b: 4, c: 5 }

// var returnedTarget = Object.assign({}, target, source) // clone
// var returnedTarget = Object.assign( target, source) // merge

// console.log(target)

// console.log(returnedTarget === target)

// 13. Object constructor (Deep)
/*
  OOP => OOP weak
  1. Encapsulation (Đóng gói) => custom
  2. Inheritance (Kế thừa) => custom
  3. Polymorphism (Đa hình) => custom
  4. Abstraction (Trừu tượng) => Not have
*/
// Encapsulation
// function Person(id, name, age, address) {
//   // properties
//   // private
//   // var _id = id
//   // var _name = name

//   // public
//   this._id = id
//   this._name = name
//   this._age = age
//   this._address = address

//   // methods
//   this.getId = function () {
//     return _id
//   }

//   this.getName = function () {
//     return this._name
//   }
// }

// var nam = new Person(1, 'Nam', 20, 'Ha Noi')
// var lan = new Person(2, 'Lan', 20, 'Ha Nam')

// console.log(nam)
// console.log(lan)

// Inheritance
// function Employee(id, name, age, gender, salary) {
//   this._id = id
//   this._name = name
//   this._age = age
//   this._gender = gender
//   this._salary = salary

//   this.introduce = function () {
//     console.log(this._id, this._name)
//   }
// }

// function Developer(id, name, age, gender, salary) {
//   Employee.call(this, id, name, age, gender, salary)

//   this.dev = function () {
//     console.log('dev any thing')
//   }
// }

// function Tester(id, name, age, gender, salary) {
//   Employee.call(this, id, name, age, gender, salary)

//   this.test = function () {
//     console.log('test any thing')
//   }
// }

// var developer = new Developer(1, 'Nam', 20, true, 1000)
// var tester = new Tester(2, 'Lan', 20, false, 500)

// developer.introduce()
// tester.introduce()

// developer.dev()
// tester.test()

// Polymorphism
// function Animal(id, name, language) {
//   this._id = id
//   this._name = name
//   this._language = language

//   this.speak = function () {
//     console.log(this._language)
//   }
// }

// function Dog(id, name, language) {
//   Animal.call(this, id, name, language)
// }

// function Cat(id, name, language) {
//   Animal.call(this, id, name, language)
// }

// var dog = new Dog(1, 'Milo', 'gâu gâu')
// var cat = new Cat(1, 'Vinamilk', 'meo meo')

// dog.speak()
// cat.speak()

// 14. Object Prototype
/*
  Built-in: String, Number, Boolean, Array, Object, ...
 */

// String.prototype.FRIEND = 'FRIEND'
// String.prototype.sayHello = function () {
//   console.log('Hello')
// }

// var man = 'Man'
// console.log(man.FRIEND)
// man.sayHello()

// function Person(id, name, age) {
//   this._id = id
//   this._name = name
//   this._age = age
// }

// Person.prototype.getName = function () {
//   return this._name
// }

// Person.prototype.getAge = function () {
//   return this._age
// }

// var person = new Person(1, 'Nam', 20)
// console.log(person)
// console.log(person.getName())

// 15. Date Object
// var date = new Date()
// var now = Date.now()

// console.log(Date.prototype)

// console.log(date) // info: text
// console.log(now) // info; ms

// var converter = Date.parse('2023-04-26')
// console.log(converter) // ms
// console.log(new Date(converter)) // text

// console.log(date.getTime()) // ms
// console.log(date.getDate()) // get day in month
// console.log(date.getDay() + 1) // get day in week: 0 - 6
// console.log(date.getMonth() + 1) // 0 - 11
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// 16. Callback
/*
  là hàm và được truyền dưới dạng đối số và được gọi lại trong hàm mà nhận nó làm đối số
  - hàm
  - được truyền dưới dạng đối số
  - được gọi lại trong hàm (hàm mà nhận nó làm đối số)
 */
// function myFunction(param) {
//   var a = 10

//   if (typeof param === 'function') {
//     param('Hello everyone', a)
//   }
// }

// function myCallback(param, a) {
//   console.log(param)
//   console.log(a)
// }

// call
// myFunction(myCallback)

// function myFunction(param) {
//   param()
//   console.log('DONE')
// }

// call
// myFunction(function () {
//   console.log('Hello')
// })

// call
// myFunction(() => {
//   console.log('Hello')
// })

// 17. Higher-order function (HOF)
/*
  Higer order functions là hàm hoạt động trên các hàm khác, bằng cách lấy chúng làm tham số hoặc trả về chúng. Nói 1 cách  đơn giản, hof là hàm nhận một hàm nhàm dưới dạng đối số hoặc trả về hàm dưới dạng đầu ra.
*/
// var cars = [
//   {
//     id: 1,
//     name: 'Honda',
//     price: 0,
//   },
//   {
//     id: 2,
//     name: 'Toyota',
//     price: 1000,
//   },
//   {
//     id: 3,
//     name: 'Huyndai',
//     price: 1000,
//   },
//   {
//     id: 4,
//     name: 'Jeep',
//     price: 0,
//   },
//   {
//     id: 5,
//     name: 'Subaru',
//     price: 3000,
//   },
//   {
//     id: 6,
//     name: 'Ford',
//     price: 3000,
//   },
// ]
// console.log(cars)
// (value, index, originArray)
// 1. forEach (k0 trả về value)
// cars.forEach((car, idx, arr) => {
//   console.log(car, idx)
// })


// 2. map (return new array)
// var carListHtml = cars.map((car, idx) => {
//   return /* html */ `<li>${car.id} - ${car.name} - ${car.price}$</li>`
// })

// var carListHtml = cars.map(
//   (car, idx) => /* html */ `<li>${car.id} - ${car.name} - ${car.price}$</li>`
// )
// console.log(carListHtml)

// 3. every (&& return boolean): check whether all value is follow the requirement
// var hasAllCarFree = cars.every((car) => {
//   // console.log(car)
//   return car.price === 0
// })


// var hasAllCarFree = cars.every((car) => car.price === 0);

// 4. some (|| return boolean)
// var existCarFree = cars.some((car, idx) => {
//   console.log(car)
//   return car.price === 0
// })

// var existCarFree = cars.some((car, idx) => car.price === 0)
// console.log(existCarFree)

// 5. find (return element)
// var car = cars.find((car) => {
//   console.log(car)
//   return car.price > 1000
// })

// var car = cars.find((car) => car.price > 1000)
// console.log(car)

// 6. findIndex
// var idx = cars.findIndex((car) => {
//   console.log(car)
//   return car.price > 1000
// })

// var idx = cars.findIndex((car) => car.price > 1000)
// console.log(idx)

// 7. filter (return new array)
// var cheapCars = cars.filter((car) => car.price < 3000)
// console.log(cheapCars)

// 8. reduce (accumulator, value, index, originArray)
// var sumCarPrice = cars.reduce((acc, car) => {
//   console.log(acc, car.price)
//   return acc + car.price
// }, 0)

// console.log(sumCarPrice)

// 9. sort (return sorted array)
// var sortedArray = cars.slice().sort((a, b) => {
//   if (a.price < b.price) return 1
//   else if (a.price > b.price) return -1
//   else return 0
// })

// console.log(sortedArray)

// var stringArr = ['Beluga', 'Blue', 'Humpback']
// var newStringArr = stringArr.slice().sort((a, b) => {
//   if (a < b) return 1
//   else if (a > b) return -1
//   else return 0
// })

// console.log(stringArr)
// console.log(newStringArr)

// Tái hiện lại HOF
// Array.prototype
// for/in
// Object.hasOwnProperty
// callback
// this pointer

// Array.prototype._map = function (callbackfn, thisArgs) {
//   if (typeof callbackfn === 'function') {
//     var output = []
//     for (var idx in this) {
//       if (this.hasOwnProperty(idx)) {
//         var result = callbackfn(this[idx], idx, this)
//         output.push(result)
//       }
//     }

//     return output
//   } else {
//     throw new TypeError(`${callbackfn} is not a function`)
//   }
// }

// var newArr = [2, 3, 4, 5].map((x) => x ** 2)
// var newArr = [2, 3, 4, 5]._map((x) => x ** 2)
// console.log(newArr)





// Array.prototype._forEach = function (callbackfn,thisArgs) {
//   if (typeof callbackfn === 'function'){
//     for (var i in this) {
//       if (this.hasOwnProperty(i)){
//         callbackfn(this[i], i, this)
//       }
//     }
//   } else {
//     throw new TypeError (`${callbackfn} is not a function`)
//   }
// }

// var sum = 0;
// function myFunction(item) {
  
//   sum +=item;
//   console.log(sum)
//   return sum;
// }

// var newvalue = [1,3,5,7,9].forEach(myFunction);
// // var newvalue = [1,3,5,7,9]._forEach(myFunction);

// console.log(newvalue);





// Array.prototype._every = function(callbackfn, thisArgs) {
//   if (typeof callbackfn === 'function') {
//     for (var i in this) {
//       if (this.hasOwnProperty(i)) {
//         var check = callbackfn(this[i], i, this);
//         if (!check) {
//           return false;
//         }
//       }
//     }
//     return true;
//   } else {
//     throw new TypeError (`$(callbackfn) is not a function`)
//   }
// }


// // var hasAllCarFree = cars._every((car) => car.price === 0);

// var hasAllCarFree = cars._every((car) => {
//   console.log(car)
//   return car.price ===0;
// })

// console.log(hasAllCarFree);
// _forEach (Kiều)
/* Array.prototype._forEach = function (callbackfn, thisArgs) {
  if (typeof callbackfn === 'function') {
    for (var idx in this) {
      if (this.hasOwnProperty(idx)) {
        callbackfn(this[idx], idx, this)
      }
    }
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _every (Duy) (&&)
/* Array.prototype._every = function (callbackfn, thisArgs) {
  if (typeof callbackfn === 'function') {
    for (var idx in this) {
      if (this.hasOwnProperty(id)) {
        var result = callbackfn(this[idx], idx, this)
        if (!result) return false
      }
    }
    return true
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _some (Giang):
/* Array.prototype._some = function (callbackfn, thisArgs) {
  if (typeof callbackfn === 'function') {
    for (var idx in this) {
      if (this.hasOwnProperty(id)) {
        var result = callbackfn(this[idx], idx, this)
        if (result) return true
      }
    }
    return false
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _find (That)
/* Array.prototype._find = function (callbackfn, thisArg) {
  if (typeof callbackfn === 'function') {
    for (var idx in this) {
      if (this.hasOwnProperty(idx)) {
        var result = callbackfn(this[idx], idx, this)
        if (result) return this[i]
      }
    }
    return undefined
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _findIndex (Nhân)
/* Array.prototype._forEach = function (callbackfn, thisArgs) {
  if (typeof callbackfn === 'function') {
    for (var idx in this) {
      if (this.hasOwnProperty(idx)) {
        var result = callbackfn(this[idx], idx, this)
        if (result) return idx
      }
    }
    return -1
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _filter
// Array.prototype._filter = function (callbackfn, thisArgs) {
//   if (typeof callbackfn === 'function') {
//     var output = []
//     for (var idx in this) {
//       if (this.hasOwnProperty(idx)) {
//         var result = callbackfn(this[idx], idx, this)
//         if (result) output.push(this[idx])
//       }
//     }
//     return output
//   } else {
//     throw new TypeError(`${callbackfn} is not a function`)
//   }
// }

// _reduce
/* Array.prototype._reduce = function (callbackfn, initialValue) {
  if (typeof callbackfn === 'function') {
    var accumulator = initialValue !== undefined ? initialValue : this[0]
    for (var i in this) {
      if (!initialValue && i === 0) {
        continue
      }

      if (this.hasOwnProperty(i)) {
        accumulator = callbackfn(accumulator, this[i], i, this)
      }
    }

    return accumulator
  } else {
    throw new TypeError(`${callbackfn} is not a function`)
  }
} */

// _sort
/* Array.prototype._sort = function (compareFn) {
  var type = typeof compareFn
  if (type === 'undefined' || type === 'function') {
    compareFn = compareFn || ((a, b) => a - b)
    var arr = this.slice()
    var length = arr.length

    for (var i = 0; i < length - 1; i++) {
      for (var j = i + 1; j < length; j++) {
        var a = this[j]
        var b = this[i]
        var result = compareFn(a, b)

        if (result !== 0) {
          // swap
          var tmp = a
          a = b
          b = tmp
        } else {
          continue
        }
      }
    }

    return arr
  } else {
    throw new TypeError(
      `The comparison function must be either a function or undefined`
    )
  }
} */

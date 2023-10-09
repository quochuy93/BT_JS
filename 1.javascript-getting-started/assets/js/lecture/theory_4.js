// 18. Set, Map Object,
// var arr = [1, 3, 4, 1, 1, 3, 5, 4, 3, 1]

// var arrSet = new Set(arr)

// console.log([...arrSet]) // Spread => Clone
// console.log(typeof arrSet)
// console.log(Set.prototype) // [[key,value],...]

// var arrMap = new Map()
// arrMap.set('a', 'Balan')
// arrMap.set('b', 'Balan')
// arrMap.set('c', 'France')
// console.log(arrMap)
// console.log(Map.prototype)

// 19. Recursive
// Loop => CPU , Recursive => RAM
// 1. Điều kiện dừng
// 2. Gọi lại chính hàm khởi tạo => Tạo ra được điểm dừng
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// gt(5) => 5 * gt(4) => 5 * 4 * gt(3) => ...
// var i = 1
// function factorial(n) {
//   if (n === 0) return 1
//   var result = n * factorial(n - 1)
//   console.log(`Time ${i++}:`, result)
//   return result
// }

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5))

// function count(n) {
//   if (n === 0) return
//   count(n - 1)
//   console.log(n)
// }

// count(10)

// 20. localStorage (SessionStorage, Cookie)
// console.log(Storage.prototype)
// console.log(localStorage)

// Get/Set
// localStorage.setItem('user', 'Tran Quyen') // add. update one
// var user = localStorage.getItem('user')
// console.log(user)
// console.log(localStorage.length)
// console.log(localStorage.key(2))
// localStorage.removeItem('user') // remove one

// ['a', 'b', 'c'] (JS data) => "['a', 'b', 'c']" (JSON string)
localStorage.setItem('fruits', JSON.stringify(['apple', 'orange', 'water melon', 'mango']))
// "['a', 'b', 'c']" (JSON string) => ['a', 'b', 'c'] (JS data)
var fruits = JSON.parse(localStorage.getItem('fruits'))

fruits.splice(fruits.indexOf('water melon'), 1)
console.log(fruits)
// localStorage.setItem('fruits', JSON.stringify(fruits))

// Clear => Xóa hết toàn bộ các item trong storage (DANGER)

// SessionStorage
// sessionStorage.setItem('user', 'John Doe')
// console.log(sessionStorage.getItem('user'))
// console.log(sessionStorage)

// Cookie
// console.log(document.cookie)
// function setCookie(cname, cvalue, exdays) {
//   const d = new Date()
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
//   let expires = 'expires=' + d.toUTCString()
//   document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
// }

// function getCookie(cname) {
//   let name = cname + '='
//   let decodedCookie = decodeURIComponent(document.cookie)
//   let ca = decodedCookie.split(';')
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i]
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1)
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length)
//     }
//   }
//   return ''
// }

// function checkCookie() {
//   let user = getCookie('username')
//   if (user != '') {
//     alert('Welcome again ' + user)
//   } else {
//     user = prompt('Please enter your name:', '')
//     if (user != '' && user != null) {
//       setCookie('username', user, 30)
//     }
//   }
// }

// checkCookie()

// console.log(document.cookie)

// 21. bind - call - apply (borrowing function)
// 21.1. Bind
// Mục đích:
// + Giúp các bạn k0 phải đi sâu vào trong object mới gọi được hàm
// + Sử dụng hàm được binding sẽ ngắn gọn hơn
// + Muốn sử dụng this trỏ tới object ban đầu, mong muốn thay vì window object (global/browser)

// Công dụng:
// + Phương thức bind trả về một hàm mới
// + bind nhận được n tham số, tham số đầu tiên là object, các tham số kế tiếp là tham số của hàm
// + Hàm rút gọn được định nghĩa từ bind có thể nhận đối số như hàm ban đầu

// Example:
// var firstName = 'John'
// var lastName = 'Doe'

// var person = {
//   firstName: 'Yua',
//   lastName: 'Kilua',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   getCustomAttr(key, attr, param3, param4) {
//     console.log(this.firstName, key, attr)
//     console.log(param3, param4)
//   },
// }

// var me = {
//   firstName: 'Quyen',
//   lastName: 'Dang',
// }

// console.log(person.getFullName())
// var getFullName = person.getFullName
// var getFullName = person.getFullName.bind()
// var getFullName = person.getFullName.bind(this)
// var getFullName = person.getFullName.bind(window)
// var getFullName = person.getFullName.bind(me)
// var getFullName = person.getFullName.bind(person);
// console.log(getFullName())

// var getCustomAttr = person.getCustomAttr.bind(me, 'key', 'value')
// getCustomAttr('key 3', 'value 4')

// var $ = document.querySelector.bind(document)
// var $$ = document.querySelectorAll.bind(document)

// var h1 = $('h1')[0]
// console.log(h1)

// 21.2. call
// var returnData = person.function.getFullName.call();
// var returnData = person.function.getFullName.call(window);
// var returnData = person.function.getFullName.call(person);
// var returnData = person.function.getFullName.call(me);
// console.log(returnData);

// function Animal(weight, height) {
//   this._weight = weight;
//   this._height = height;
// }

// function Dragon(name, type, leg, weight, height) {
//   Animal.call(this, weight, height);
//   this._name = name;
//   this._type = type;
//   this._leg = leg;
// }

// var dragon = new Dragon('Thanh Long', 'Than', 4, 1000, 1000);
// console.log(dragon);

// 21.3. apply
// Khác call ở 1 điểm nhận tham số thứ 2 dưới dạng mảng
// var returnData = person.getCustomAttr.apply();
// var returnData = person.getCustomAttr.apply(me, ['key', 'value']);

// *Tóm tắt
// + Giống nhau: bind, call, apply, đều là các methods được kế thừa từ function prototype
// + Khác nhau:
// > Bind
// - trả về hàm mới với this tham chiếu tới object được nhắc tới
// - không thực hiện khi gọi hàm
// - nếu được bind kèm với các tham số thì các tham số đó được ưu tiên hơn các tham số mới truyền vào
// > Call
// - thực hiện khi gọi hàm với this tham chiếu tới object được nhắc tới
// > Apply
// - Cơ bản giống call chỉ khác là truyền tham số dưới dạng mảng

// 22. Closure and Chaining
// Bài toán mèo và chuột
// var MOUSE = 1
// function Cat() {
//   var mouseEaten = 0

//   return {
//     // <== this
//     eat(mouse) {
//       mouseEaten += mouse
//       return this
//     },
//     show() {
//       console.log('✨Mouse:', mouseEaten)
//       return this
//     },
//   }
// }

// var cat = Cat()
// cat.eat(MOUSE).eat(MOUSE).eat(MOUSE).eat(MOUSE).eat(MOUSE).show()

// Tự học (3W1H)
// Location
// console.log(location);

// Navigator
// console.log(navigator);

// Headers
// console.log(new Headers());

// FormData
// console.log(new FormData());

// XMLHttpRequest => old project

// performance

// BOM => WOM (window object)

// Library usage

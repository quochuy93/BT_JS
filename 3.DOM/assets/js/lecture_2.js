const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// 1. HTML: innerHTML, outerHTML
// const boxNode = $('.box')
// console.log(boxNode)
// console.log(boxNode.innerHTML)
// console.log(boxNode.outerHTML)
// boxNode.innerHTML = `<h1>New Heading</h1>
// <h2>Heading 2</h2>`
// boxNode.outerHTML = `<h2>Hello</h2>`

// 2. Node Element Properties
/*
  firstChild - lastChild (Node - Text/Element)
  firstElementChild - lastElementChild (Node - Element)
  nextSibling - previousSibling (Node - Text/Element)
  nextElementSibling - previousElementSibling (Node - Element)
  children - childNodes - childElementCount
  parentElement - parentNode

  ✨Note:
  - Coi Node như object, truy cập tương tự kiến thức object đã học.
  - Một số trường hợp đặc biệt k0 áp dụng được, nghĩ ngay đến sử dụng method DOM
*/
const ancestorNode = $('.ancestor')
console.log(ancestorNode)
// console.log(ancestorNode.firstChild)
// console.log(ancestorNode.lastChild)
// console.log(ancestorNode.firstElementChild)
// console.log(ancestorNode.lastElementChild)
// console.log(ancestorNode.nextSibling)
// console.log(ancestorNode.previousSibling)
// console.log(ancestorNode.nextElementSibling)
// console.log(ancestorNode.previousElementSibling)
// console.log(ancestorNode.children)
// console.log(ancestorNode.childNodes)
// console.log(ancestorNode.childElementCount)
// console.log(ancestorNode.parentElement)
// console.log(ancestorNode.parentNode)

// Get image src
// const cover = $('.cover > img')
// console.log(cover.src)
// console.log(cover.getAttribute('src'))

// 3. Node Styles
/*
  Single style
  Multiple style
*/

// Single style
// background-color => backgroundColor
// border-top-left-radius => borderTopLeftRadius
const squareNode = $('.square')
// squareNode.style.width = '150px'
// squareNode.style.height = '150px'
// squareNode.style.backgroundColor = 'red'
// squareNode.style.borderTopLeftRadius = '50%'

// Multiple style
Object.assign(squareNode.style, {
  width: '150px',
  height: '150px',
  backgroundColor: 'red',
  borderTopLeftRadius: '50%',
})

// 4. ClassList
/*
  add
  remove
  contains
  toggle => check => co class => remove
                  => k0 co class => add
*/
console.log(squareNode.classList)
// setTimeout(() => {
//   squareNode.classList.add('blue', 'stack')
// }, 3000)

// setTimeout(() => {
//   squareNode.classList.remove('blue', 'primary')
// }, 3000)

// setInterval(() => {
//   squareNode.classList.toggle('primary')
// }, 1000)

// 5. DOM Events vs Events Listener
// Case 1: call event with function (use in react)
// const showAlert = () => {
//   alert('Hello')
// }

// Case 2: set event with function
// const cta = $('#cta')
// cta.onclick = () => {
//   alert('Hello')
// }

// Case 3: Events Listener
// const cta = $('#cta')
// cta.addEventListener('click', () => {
//   alert('Hello')
// })

// Event Listener

// 6. Event
// e.preventDefault() => Ngăn chặn hành vi mặc định
const submitForm = function (e) {
  e.preventDefault()
  console.log(e)
}

$('#submit').addEventListener('click', submitForm)

// e.stopPropagation() => Ngăn chặn sự kiện nổi bọt
$('.parent').onclick = function (e) {
  console.log('parent')
}

$('.child').onclick = function (e) {
  e.stopPropagation()
  console.log('child')
}

// 7. Practices
// input, change,
// keyup, keydown, keypress

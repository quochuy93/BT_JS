// 1. DOM là gì?
/*
  Document Object Model W3C (DOM) là một nền tảng và giao diện ngôn ngữ trung lập cho phép các chương trình và tập lệnh truy cập động và cập nhật nội dung, cấu trúc và kiểu của tài liệu.

  ✨DOM:
  + Core DOM
  + XML DOM
  + HTML DOM (*)

  ✨DOM Tree:
  + Element (Tag)
  + Attribute
  + Text
  => Node

  HTML DOM: cung cấp quy chuẩn của HTML (W3C) và cho chúng ta khả năng thay đổi trang web như thêm sửa xóa hay can thiệp vào các node (element, attribute và text) trên trang web.
*/

// 2. HTML DOM vs DOM API
// Browser | Data (URL)

// 3. Document Object
// console.log(window)
// console.log(document)
// console.log({ document })

// document.bgColor = 'yellow'
// document.body.style.backgroundColor = document.bgColor

// 4. Get element methods
// getElementById   getElementsByClassName
// querySelector    querySelectorAll
// getElementByName getElementsByTagName

// Node => Object (null)
// var headingNode = document.getElementById('heading')
// console.log(headingNode)
// console.log({ headingNode })

// var headingNode = document.querySelector('[data-heading="heading"]')
// console.log(headingNode)

// HTMLCollection => Array ([])
// var headingNode = document.getElementsByClassName('heading')
// console.log(headingNode)
// console.log(headingNode[0])
// console.log(headingNode['heading'])
// console.log(headingNode.heading)

// var headingNode = document.getElementsByTagName('h1')
// console.log(headingNode)

// NodeList => Array  ([])
// var headingNode = document.querySelectorAll('.heading')
// console.log(headingNode)
// console.log(headingNode[0])
// console.log({ el: headingNode[0] })

// var headingNode = document.getElementsByName('heading')
// console.log(headingNode)

// all, anchors, forms
// console.log(document.all)

// Get all anchors in website (should set name for all a tag)
// console.log(document.anchors)

// Get all forms in website (should set id for all form tag)
// console.log(document.forms)

// 5. Get child from parent
// var h3Node = document.querySelector('.box > h3')
// console.log(h3Node)

// var boxNode = document.querySelector('.box')
// var h3Node = boxNode.querySelector('h3')
// console.log(h3Node)

// var h3Node = document.querySelector('.box').querySelector('h3')
// console.log(h3Node)

// 6. Attribute / Text
// 6.1. DOM Attribute
var headingNode = document.querySelector('[title$="g"]')
console.log(`🚀 | headingNode:`, headingNode)

// Dataset
// console.log(headingNode.dataset)
// console.log(headingNode.dataset.toggle)
// console.log(headingNode.dataset['toggle'])

// headingNode.dataset.toggle = 'false'
// console.log(headingNode.dataset.toggle)

// Get/Set Attribute
// console.log(headingNode.title)
// headingNode.title = 'Hello'
// console.log(headingNode.title)

// user defined can't get/set with this way
// console.log(headingNode.qtechfun)
// headingNode.qtechfun = 'sample'

// getAttribute/setAttribute (every case)
// console.log(headingNode.getAttribute('qtechfun'))
// headingNode.setAttribute('qtechfun', 'sample')
// console.log(headingNode.getAttribute('qtechfun'))

// headingNode.setAttribute('data-history', 'sample')
// console.log(headingNode.getAttribute('data-history'))

// Text: innerText, outerText, textContent
// var typography = document.querySelector('.typography')
// console.log(typography)
// console.log(typography.innerText)
// console.log(typography.outerText)
// console.log(typography.textContent)

// typography.innerText = 'Hello World!'
// typography.outerText = 'Hello World!'

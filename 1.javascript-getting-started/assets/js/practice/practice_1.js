// var str = 'The man who take my book.'
// 1. Tim vi tri cua tu dau tien chua chu "o"
// 2. Thay the "my book" thanh "my bag"
// 3. Them chuoi sau vao chuoi ban dau: "I don't know that man."
// 4. Hightlight "my bag" with 2 star like: "*my bag*"
// 5. Tach chuoi thanh mang va tim nhung tu chua ky tu "a"

// ==========================================================

// 1
// var str = 'The man who take my book.';
// var x = str.indexOf('o');
// console.log(x);

// // 2
// var new_sentence = str.replace("my book", "my bag");
// console.log(new_sentence);

// // 3
// var new_string = new_sentence + " " + "I don't know that man."
// console.log(new_string)
// // 4
// function highlight (a) {
//     var x = a.indexOf('my bag')
//     var b = a.slice(0,x) + "*my bag*" + a.slice(x+6);
//     return b;
// }

// hightlight_sentence = highlight(new_string);
// console.log(hightlight_sentence);

// // 5
// var new_array = hightlight_sentence.split(' ');
// for (var i in new_array) {
//     var x = new_array[i]
//     if (x.indexOf('a')>-1) {
//         console.log(x)
//     }
// }
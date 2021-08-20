
let element = document.createElement('div');
element.style.cssText = "width:200px; height:20px; background:blue;";
element.onclick = function(){ alert('hello'); };
document.body.appendChild( element );
let target = document.getElementById('green');
document.body.insertBefore( element, target );

// let element = document.createElement('div');

// element.style.cssText = "width:200px; height:20px; background:blue;";

// element.onclick = function(){
//     alert('hello');
// };
// // appends the element that we mad which is the div elements and added them to each other
// //document.body.appendChild( element);

// let target = document.getElementsById('green');
// document.body.insertBefore(element, target);
let el = document.getElementById('style');
//Instead of writing each style change you can simply use cssText and bunch it together!!
 el.style.background = "blue";
 el.style.color = "red";
// el.style.width = "200px";
// el.style.height = "100px";

 el.style.cssText = "background: blue; color:yellow; width:200px";
// // when adding you can use the += to the cssStyle 
 el.style.cssText += "height:200px; ";

console.log(getComputedStyle(el));
//pHello is the memory pointer and searching through once to see where it resides
let pHello = document.getElementById('hello');
    
pHello.innerText = "new world";

//allows us to add to the HTML 
pHello.innerHTML +=  'order <span>hello world</span>';

pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></h2>';

let spanH1 = document.querySelectorAll('h1 span');
//SspanH1.innerHTML = "new text here!";
//let spanH1 = document.querySelectorAll('h1 span');

spanH1[0].innerHTML = "new text here!!";

//instead of writing it twice we can give it  a symbol then access both of them
//document.getElementById('hello').innerText = " NEW WORLD"; // returns reference to the object.
//document.getElementById('hello').innerText += " order";
const tut = 16;
console.log("This is tut "+ tut);
let element = document.createElement("li");

element.className = "childul";
element.id = "createdLi";
element.setAttribute('title', 'mytitle');
element.innerHTML = "<b>Hello this is Nikhil</b>"


let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);
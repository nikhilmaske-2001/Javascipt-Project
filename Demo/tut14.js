const tut = 14;
console.log("This is tut " + tut);


let element = document.getElementById("first");
// element.style.color = "red";
// element.innerHTML = "<b>This is javascipt</b>";
// element.innerText = "Hello";

let sel = document.querySelector("#second");
// sel.style.color = "blue";
// sel = document.querySelector(".child");
// sel.style.color = "green";
sel = document.querySelector(".container");
// sel.style.color = "green";

let elems =document.getElementsByTagName("div");
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    // element.style.color = "blue";
});
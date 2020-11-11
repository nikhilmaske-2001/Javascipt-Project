//Exercise 1

//Displaying all links having harry word in ti
let a =document.links;

Array.from(a).forEach(function(element){
    if(element.href.includes("harry")){
        console.log(element.href);
    }
})
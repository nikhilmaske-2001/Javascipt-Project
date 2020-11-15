const tut = 28;
console.log("This is tut "+ tut);

//Object lterals : Object.prototype
let obj = {
    name : "Nikhil",
    channel : "Hello",
    address : "Earth",
};

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("NIkhil Maske");
console.log(obj2);
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// because a and b are strings, so the result is 12
// to fix this, we need to convert a and b to numbers

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3

// now the result is 3



let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete"
delete user["name"];

let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete"
delete user["name"];

let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete"
delete user["name"];

function multiplyNumeric(menu) {
  for(let key in menu){
    if(typeof menu[key] == 'number') menu[key] *= 2;
  }
}

function multiplyNumeric(menu) {
  for(let key in menu){
    if(typeof menu[key] == 'number') menu[key] *= 2;
  }
}
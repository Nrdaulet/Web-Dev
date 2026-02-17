function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed.");
() => alert("You canceled the execution.");
);

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//true, false, true, true, false, false, false

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//true, false, true, true, false, false, false

function pow(x, n) {
  return x**n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
      '';

alert( null || 2 || undefined );
//2
alert( alert(1) || 2 || alert(3) );
//1, 2
alert( 1 && null && 2 );
//null
alert( alert(1) && alert(2) );
//1
alert( null || 2 && 3 || 4 );
//3
if(age >= 14 && age <= 90)

  if(!(age >= 14 && age <= 90))
    if(age < 14 || age > 90)

      if (-1 || 0) alert( 'first' ); // will run
if (-1 && 0) alert( 'second' ); // will not
if (null || -1 && 1) alert( 'third' ); // will run

let login = prompt("Who is there", '');
if(login == "Admin") {
  let password = prompt("Password?", '');
  if(password === "TheMaster"){
    alert("Welcome!");
  } else if(password === '' || password === null) {
    alert("Caneled");
  } else {
    alert("Wrong password");
  }
} else if(login === '' || password === null){
  alert("Canceled");
} else {
  alert("I don't know u");
}

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// because a and b are strings, so the result is 12
// to fix this, we need to convert a and b to numbers

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3

// now the result is 3


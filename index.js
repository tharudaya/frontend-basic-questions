//var
var var1 = 5;
var var1 = 20;
var1 = 30;

function myF() {
    var var1 = 10;
    console.log('in', var1);
}
myF();
console.log('out', var1);

//let
let let1 = 5;
//let let1 = 20;
let1 = 30;

{
    let let1 = 10;
    console.log('in', let1);
}

console.log('out', let1);

//const
const const1 = 5;
//const const1 = 20;
//const1 = 30;

{
    const const1 = 10;
    console.log('in', const1);
}

console.log('out', const1);

const myArr = [1, 2, 3];
myArr[2] = 6;

console.log(myArr);

const person = {
    name: "SL"
}

person.name = "SL Frontend Developer";

console.log(person);


// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){ //fn declairation
//     return num * 2;
// }

const doubleIt = num => num * 2; //1ta parameter(input) thakle
const add = (x, y) => x + y; //akadhik thakle () diye
const give5 = () => 5;       //kono parameter na thakle

//niche likhle must return dite hobe
const add2 = (x,y) => {
    return x+y;
}

const doMath = (x, y) => { //onek kaj kora lagle
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);


//new
// function declaration
function add(num1, num2) {
    return num1 + num2;
}
// function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
//arrow function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(15, 17);
const sum2 = add2(15, 17);
const sum3 = add3(15, 17);
const sum4 = add4(15, 17);
console.log(sum1, sum2, sum3, sum4);
// document.getElementById('my-btn').onclick = function handleEvent(){

// 



const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);
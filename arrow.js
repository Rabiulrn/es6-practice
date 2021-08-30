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
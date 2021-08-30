const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
//normal concat
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

//es6 ... Spread oparator
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2); 
const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisa = [650, 450, 250, 850];//array akare thakle
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);//... dile sereally bose jabe
console.log(maximum);


//new

const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);            //max er vitore array dile kaj kore na.tai ... diye val;u gulo niye aste hoy******
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];                  //aivabe dile numbers2 alada jayga nibe & alada array hisebe kaj korbe
// const numbers2 = numbers   //aivabe dile ,numbers a push korle numbers2 teo dekhabe(reference er jonno)
numbers.push(55);
console.log(numbers);
console.log(numbers2);